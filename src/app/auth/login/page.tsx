import { titleFont } from "@/config/fonts";
import Link from "next/link";

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  return (
    <div className="flex flex-col px-2 min-h-screen pt-32 sm:pt-52 text-center bg-white dark:bg-black">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>Sign In</h1>

      <div className="flex flex-col w-full mx-auto sm:w-[400px] p-2">
        <label htmlFor="email">Email Address</label>
        <input
          className="px-5 py-2 border bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 rounded outline-none mb-5 dark:hover:bg-gray-900 duration-300"
          type="email"
        />

        <label htmlFor="password">Password</label>
        <input
          className="px-5 py-2 border outline-none bg-gray-200 dark:bg-gray-800 rounded mb-5 dark:hover:bg-gray-900 duration-300 hover:bg-gray-300"
          type="password"
          id="password"
        />

        <button className="relative bg-green-600 text-black dark:hover:text-white hover:text-black hover:bg-transparent duration-500 group px-6">
          Sign In
          <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-orange-600 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
        </button>

        {/* Divider line */}
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">Or</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link
          href="/auth/new-account"
          className="relative bg-green-600 text-black dark:hover:text-white hover:text-black hover:bg-transparent duration-500 group px-6 text-center"
        >
          Create a New Account
          <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-orange-600 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
        </Link>
      </div>
    </div>
  );
}
