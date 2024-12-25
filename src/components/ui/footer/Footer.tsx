import { titleFont } from "@/config/fonts"


export const Footer = () => {
  return (
    <div className="flex flex-col w-[200px] mx-auto justify-center items-center text-xs py-4">

      <div className=" border-b border-t py-1">
      <span className={`${titleFont.className} mr-1 font-bold`}>German </span>
      <span> |  Shop</span>
      <span className="ml-2">© {new Date().getFullYear()}</span>
      </div>
    </div>
  )
}
