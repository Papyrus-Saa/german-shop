import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  return (
    <div className="">
      <div className="w-full h-screen fixed top-0 right-0 bg-red-950 dark:bg-red-700 backdrop-filter backdrop-blur-sm opacity-70 dark:opacity-20 z-10" / >


     <div className="flex flex-col justify-center items-center w-full h-screen fixed top-0 right-0 z-20 text-white">
     <IoCartOutline size={40} className="mx-5"/>
      <h2 className="mb-4">Your shopping cart is empty</h2>
      <Link className="px-3 bg-red-500 dark:bg-red-700 hover:bg-red-600 " href="/">
      Go back
      </Link>
     </div>
    </div>
  );
}
