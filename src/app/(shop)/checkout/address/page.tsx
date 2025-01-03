import { Title } from "@/components/ui/title/Title";
import MyButton from "@/shared/MyButton";
import Link from "next/link";

export default function NamePage() {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-4 md:px-10 md:w-[700px] md:mx-auto">
      <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
        <Title title="Address" subtitle="Delivery address" />

        <div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">
          <div className="flex flex-col mb-2">
            <span>First Name(s)</span>
            <input
              type="text"
              className="p-2 rounded-md bg-gray-200 dark:bg-gray-900 outline-none"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Last Name(s) / Surname(s)</span>
            <input
              type="text"
              className="p-2  rounded-md bg-gray-200 dark:bg-gray-900 outline-none "
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Address</span>
            <input
              type="text"
              className="p-2  rounded-md bg-gray-200 dark:bg-gray-900 outline-none"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Address 2 ( optional )</span>
            <input
              type="text"
              className="p-2  rounded-md bg-gray-200 dark:bg-gray-900 outline-none"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Postal Code / ZIP Code</span>
            <input
              type="text"
              className="p-2  rounded-md bg-gray-200 dark:bg-gray-900 outline-none"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>City</span>
            <input
              type="text"
              className="p-2  rounded-md bg-gray-200 dark:bg-gray-900 outline-none"
            />
          </div>

          <div className="flex flex-col mb-2">
            <span>Country</span>
            <select className="p-2  rounded-md bg-gray-200 dark:bg-black">
              <option value="">[ Select ]</option>
              <option value="CRI">Germany</option>
            </select>
          </div>

          <div className="flex flex-col mb-2">
            <span>Phone</span>
            <input
              type="text"
              className="p-2  rounded-md bg-gray-200 dark:bg-gray-900 outline-none"
            />
          </div>

          <div className="flex flex-col mb-2 sm:mt-10">
            <Link
              href="/checkout"
              className="flex w-full sm:w-1/2 justify-center bg-green-600 hover:bg-transparent duration-500 border-transparent hover:border-b-orange-600 hover:border-b"
            >
             <MyButton title="Next"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
