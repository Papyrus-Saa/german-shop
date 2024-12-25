'use client'

import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store/ui/ui-store";
import Link from "next/link";
import React from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
// import { TfiShoppingCart } from "react-icons/tfi";




export const TopMenu = () => {

  const openSideMenu = useUIStore( state => state.openSideMenu);

  return (
    <nav className="flex px-5 justify-around items-center w-full">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased`}>German</span>
          <span> | Shop</span>
        </Link>
      </div>

      {/* Center Menu */}

      <div className="hidden sm:block">
        <Link className="mb-2 m-2 p-2 rounded-md transition-all duration-300  hover:bg-gray-200 dark:hover:bg-zinc-950 " href="/category/men">
          Men
        </Link>
        <Link className="mb-2 m-2 p-2 rounded-md transition-all duration-300 hover:bg-gray-200  dark:hover:bg-zinc-950 " href="/category/women">
          Women
        </Link>
        <Link className="mb-2 m-2 p-2 rounded-md transition-all duration-300 hover:bg-gray-200  dark:hover:bg-zinc-950 " href="/category/kid">
          Kids
        </Link>
      </div>

      {/* Search, Cart, Menu */}

      <div className="flex items-center">

        <Link href="/search" className="mx-2 hover:border-gray-400">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <Link href="/cart" className="mx-2">
          <div className="relative">
            <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-red-500 text-white">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
           onClick={ openSideMenu}
          className="m-2 p-2 rounded-md transition-all duration-300 hover:bg-gray-200  dark:hover:bg-zinc-950 ">
          <RiMenu4Line />
        </button>

      </div>
    </nav>
  );
};
