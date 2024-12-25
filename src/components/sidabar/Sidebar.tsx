"use client";

import { useUIStore } from "@/store/ui/ui-store";
import Link from "next/link";
import {
  IoLogInOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

import clsx from "clsx";
import { TiArrowRightThick } from "react-icons/ti";

const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);


  return (
    <div>
      {/* Background black */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-20" />
      )}

      {/* Blur */}
      {isSideMenuOpen && (
        <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />
      )}

      <nav
        className={clsx(
          "fixed  p-5 right-0 top-0 sm:w-[400px] h-screen bg-gray-200 dark:bg-stone-900 z-20 transform transition-all duration-500 backdrop-filter backdrop-blur-sm opacity-70",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <div className=" flex justify-end items-center p-1  w-full h-6 mb-6 text-blue-600  hover:text-red-500 duration-300">
          <TiArrowRightThick
            size={20}
            onClick={() => closeMenu()}
            className=" flex justify-end cursor-pointer"
          />
        </div>

        <div className="relative">
          <IoSearchOutline className="text-gray-700 absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-white dark:bg-gray-800 rounded pl-10 py-1 outline-none text-black dark:text-white mb-10"
          />
        </div>

        {/* Menu */}

        <Link
          href="/"
          className="flex items-center p-2 hover:bg-gray-100 duration-400 dark:hover:bg-gray-800"
        >
          <IoPersonOutline size={20} className="" />
          <span className="ml-3  ">Profil</span>
        </Link>
        <Link
          href="/"
          className="flex items-center p-2  hover:bg-gray-100 duration-400 dark:hover:bg-gray-800"
        >
          <IoTicketOutline size={20} className="" />
          <span className="ml-3 ">Orders</span>
        </Link>
        <Link
          href="/"
          className="flex items-center p-2  duration-400  hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <IoLogInOutline size={20} className="" />
          <span className="ml-3 ">Sign in</span>
        </Link>
        <Link
          href="/"
          className="flex items-center p-2  duration-400  hover:bg-gray-100 mb-8 dark:hover:bg-gray-800"
        >
          <IoLogInOutline size={20} className="" />
          <span className="ml-3  text-red-600">Sign out</span>
        </Link>
        {/* <div className="w-full h-px bg-blue-600 mb-8" /> */}

        <Link
          href="/"
          className="flex items-center p-2  duration-400 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <IoShirtOutline size={20} className="" />
          <span className="ml-3 ">Orders</span>
        </Link>
        <Link
          href="/"
          className="flex items-center p-2  hover:bg-gray-100 duration-400 dark:hover:bg-gray-800"
        >
          <IoTicketOutline size={20} className="" />
          <span className="ml-3 ">Orders</span>
        </Link>

        <Link
          href="/"
          className="flex items-center p-2  hover:bg-gray-100 dark:hover:bg-gray-800 duration-400"
        >
          <IoPeopleOutline size={20} className="" />
          <span className="ml-3">Users</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
