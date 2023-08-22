import React, { useEffect, useState } from "react";
import {
  AiOutlineEdit,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import "react-quill/dist/quill.snow.css";
import { MdDeleteOutline } from "react-icons/md";

const Posts = () => {
  const [view, setView] = useState(false);

  // const activeSidebar = () => {
  //   let a = document.location;
  //   console.log(a);
  // };

  // useEffect(() => {
  //   activeSidebar();
  // }, []);

  const data = [
    {
      x: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quosconsectetur, in voluptatem totam esse. Aspernatur.",
    },
    {
      x: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quosconsectetur, in voluptatem totam esse. Aspernatur.",
    },
    {
      x: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quosconsectetur, in voluptatem totam esse. Aspernatur.",
    },
    {
      x: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quosconsectetur, in voluptatem totam esse. Aspernatur.",
    },
    {
      x: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quosconsectetur, in voluptatem totam esse. Aspernatur.",
    },
    {
      x: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quosconsectetur, in voluptatem totam esse. Aspernatur.",
    },
    {
      x: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quosconsectetur, in voluptatem totam esse. Aspernatur.",
    },
  ];
  return (
    <>
      <div className="w-[95%] mx-auto">
        <div className="flex justify-between  mt-8 mb-4 mx-auto">
          {/* <button className="px-1 sm:px-6 py-2 h-fit bg-black border-2 border-black hover:shadow-lg rounded-xl text-white hover:bg-white hover:text-black duration-300 hover:transition-all ">
          Create New Post
        </button> */}
          <p className="text-2xl font-semibold font-sans mx-5"> All Posts</p>
          <select
            name=""
            id=""
            className="px-0.5 sm:px-3 py-2 rounded-lg border h-fit border-gray-400"
          >
            <option value="">All Post</option>
            <option value="">Most View Post</option>
            <option value="">Least View Post</option>
          </select>
        </div>
        <div className="w-full bg-white rounded-2xl shadow-xl">
          <div className=" flex flex-col gap-3 lg:w-11/12 mx-auto pt-8 p-4 ">
            {data.map((x) => (
              <div className="flex p-3 border-2 rounded-2xl border-gray-300">
                <img
                  src="https://i0.wp.com/filmbunch.in/wp-content/uploads/2023/03/Leo.jpg?fit=1140%2C641&ssl=1"
                  className="w-28 h-20 hidden md:block"
                  alt=""
                />
                <div className="w-3/4 px-3 relative ">
                  <p className="font-medium font-serif line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    quos consectetur, in voluptatem totam esse. Aspernatur.
                  </p>

                  <div className="pl-1 flex absolute items-center -bottom-1 text-sm text-gray-500 ">
                    <p className="mr-2 ">Mayank Jha</p>
                    <p className="mr-2 hidden sm:block">15 Aug</p>
                    <p className="mx-4 px-3 py-1 h-fit hidden sm:block border border-gray-400 rounded-2xl bg-white">
                      Business
                    </p>
                    <div className="flex gap-1 items-center ">
                      <AiOutlineEye size={20} className="text-gray-500" />
                      <span className="text-gray-500">15000</span>
                    </div>
                  </div>
                </div>
                <div className="flex ml-auto z-10">
                  {!view ? (
                    <AiOutlineEye
                      className="bg-white mr-2 mt-auto border hover:bg-black hover:text-white duration-300 hover:scale-125 shadow-lg rounded-full h-9 p-2 w-9 my-1"
                      size={30}
                      onClick={() => setView(!view)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="bg-white mr-2 mt-auto border hover:bg-black hover:text-white duration-300 hover:scale-125 shadow-lg rounded-full h-9 p-2 w-9 my-1"
                      size={30}
                      onClick={() => setView(!view)}
                    />
                  )}
                  <div className="ml-auto">
                    <AiOutlineEdit
                      size={30}
                      className="bg-white border hover:bg-black hover:text-white duration-300 hover:scale-125 shadow-lg rounded-full h-9 p-2 w-9 my-1"
                    />
                    <MdDeleteOutline
                      size={30}
                      className="bg-white border hover:bg-black hover:text-white duration-300 hover:scale-125 shadow-lg rounded-full h-9 p-2 w-9 my-1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
