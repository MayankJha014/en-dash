import React, { useState } from "react";
import UserNavbar from "./user_navbar";
import Logo from "../../../assets/Logo.png";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import Accrobian from "../../accrobian";
import FirstHeader from "../header/first-header";
import { HeaderSwitch } from "./page_switch";

const ThemePage = () => {
  const [headerUi, setHeaderUi] = useState({
    logo: "",
    adsImage: "",
    navPosition: "",
  });

  const dragItem = React.useRef(null);
  const dragOverItem = React.useRef(null);

  const logoimageChange = () => {
    const inputImage = document.createElement("input");
    inputImage.setAttribute("type", "file");
    inputImage.setAttribute("accept", "image/*");
    inputImage.setAttribute("name", "logo");
    inputImage.click();

    inputImage.onchange = async (e) => {
      const file = inputImage.files[0];

      setHeaderUi({ ...headerUi, logo: URL.createObjectURL(file) });
    };
  };

  const adsimageChange = () => {
    const inputImage = document.createElement("input");
    inputImage.setAttribute("type", "file");
    inputImage.setAttribute("accept", "image/*");
    inputImage.setAttribute("name", "adsImage");
    inputImage.click();

    inputImage.onchange = async (e) => {
      const file = inputImage.files[0];

      setHeaderUi({ ...headerUi, adsImage: URL.createObjectURL(file) });
    };
  };

  const [navbarIndex, setNavbarIndex] = useState([
    {
      title: "Home",
      Path: "/",
    },
    {
      title: "Educational",
      Path: "/education",
    },
    {
      title: "Business",
      Path: "/business",
    },
    {
      title: "Entrepreneur",
      Path: "/entrepreneur",
    },
    {
      title: "Startup",
      Path: "/startup",
    },
  ]);

  // const onDragStart = (e, index) => {
  //   console.log("Drag started", index);
  // };
  // const onDragEnter = (e, index) => {
  //   console.log("Drag Enter", index);
  // };

  const handleSort = () => {
    let navIndex = [...navbarIndex];

    const draggableItemContent = navIndex.splice(dragItem.current, 1)[0];

    navIndex.splice(dragOverItem.current, 0, draggableItemContent);

    dragItem.current = null;
    dragOverItem.current = null;

    setNavbarIndex(navIndex);
  };

  const onDragEnd = (e, index) => {
    console.log("Drag End", index);
  };

  const handleInputChange = async (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setHeaderUi({ ...headerUi, [name]: value });
  };

  return (
    <div>
      <div className="flex w-full h-screen overflow-hidden">
        <div className="w-full bg-gray-200 min-h-full md:w-[25rem] min-w-max shadow-xl">
          <Accrobian heading="Header" height="37rem">
            <div className="p-2">
              <div className="grid grid-cols-3 gap-5 text-base  relative font-semibold items-center">
                <p>Logo: </p>
                <div className="my-2 h-20 col-span-2 border-2 shadow-lg rounded-lg border-black/50 bg-white relative">
                  <img
                    src={headerUi.logo ? headerUi.logo : Logo}
                    alt=""
                    className="h-16 w-48 object-contain"
                  />
                  <div>
                    <AiOutlineEdit
                      className="absolute bottom-2 right-0 bg-white shadow-xl hover:bg-black hover:text-white rounded-full p-1"
                      size={30}
                      onClick={logoimageChange}
                    />
                    <MdDeleteOutline
                      className="absolute top-1 right-0 bg-white shadow-xl hover:bg-black hover:text-white rounded-full p-1"
                      size={30}
                      onClick={() => {
                        setHeaderUi({ ...headerUi, logo: null });
                      }}
                    />
                  </div>
                </div>
                <p>Ads: </p>
                <div className="h-20 my-2 border-2 col-span-2 shadow-lg rounded-lg border-black/50 bg-white relative">
                  <img
                    src={headerUi.adsImage ? headerUi.adsImage : Logo}
                    alt=""
                    className="h-16 w-48 object-contain"
                  />
                  <div>
                    <AiOutlineEdit
                      className="absolute bottom-2 right-0 bg-white shadow-xl hover:bg-black hover:text-white rounded-full p-1"
                      size={30}
                      onClick={adsimageChange}
                    />
                    <MdDeleteOutline
                      className="absolute top-1 right-0 bg-white shadow-xl hover:bg-black hover:text-white rounded-full p-1"
                      size={30}
                      onClick={() => {
                        setHeaderUi({ ...headerUi, adsImage: null });
                      }}
                    />
                  </div>
                </div>
                <p>Position : </p>
                <div className="col-span-2">
                  <select
                    name="navPosition"
                    className="p-2 rounded-xl shadow-lg"
                    onChange={handleInputChange}
                  >
                    <option value="space-between">Space-Between</option>
                    <option value="center">Center</option>
                    <option value="flex-end">Flex-end</option>
                    <option value="flex-start">Flex-start</option>
                    <option value="end">End</option>
                    <option value="space-around">Space-Around</option>
                    <option value="space-evenly">Space-Evenly</option>
                  </select>
                </div>
                <p className="col-span-3">Navbar</p>
                <div className="w-4/5  border-2 col-span-3 mx-auto">
                  {navbarIndex.map((x, index) => (
                    <div
                      className="flex justify-between m-1 cursor-move rounded-full p-2 bg-purple-300 nav-item"
                      key={index}
                      draggable
                      onDragStart={(e) => (dragItem.current = index)}
                      onDragEnter={(e) => (dragOverItem.current = index)}
                      onDragEnd={handleSort}
                      onDragOver={(e) => e.preventDefault()}
                    >
                      <div className=" px-4">{x.title}</div>
                      <div className="flex gap-1">
                        <AiOutlineEdit
                          size={22}
                          className="bg-white shadow-xl hover:bg-black hover:text-white rounded-full w-6 h-6 p-1"
                        />
                        <MdDeleteOutline
                          size={22}
                          className="bg-white shadow-xl hover:bg-black hover:text-white rounded-full w-6 h-6 p-1"
                          onClick={() => {
                            setNavbarIndex(
                              navbarIndex.filter((y) => y.title != x.title)
                            );
                            console.log(navbarIndex);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Accrobian>{" "}
          <Accrobian heading="Advance" height="40rem">
            <div className="p-2">
              <div className="grid grid-cols-3 gap-5 text-base  relative font-semibold items-center">
                <p className="whitespace-nowrap">Home Header : </p>
                <div className="col-span-2">
                  <select
                    name="homeHeader"
                    className="p-2 rounded-xl shadow-lg px-4 w-3/5"
                    onChange={handleInputChange}
                  >
                    <option value="1">First </option>
                    <option value="2">Second</option>
                    <option value="3">Third</option>
                    <option value="4">Forth</option>
                  </select>
                </div>
              </div>
            </div>
          </Accrobian>{" "}
        </div>
        <div className="hidden md:basis-2/3 md:block ">
          <div className="w-full scale-75 overflow-auto">
            <UserNavbar headerUi={headerUi} navItem={navbarIndex} />
            {HeaderSwitch(headerUi.homeHeader)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemePage;
