import QuantitySelector from "@/components/product/quantity-selector/QuantitySelector";
import { Title } from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const inCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="shopping cart"  className="mb-20"/>

        <div className="grid grid-cols-1 sm:px-2 sm:grid-cols-2 gap-10">
          {/* Cart */}

          <div className="flex flex-col mt-5">
            <span className="text-xl">Add more items...</span>
            <Link href="/" className="underline text-xl text-green-400">
              Continue shopping
            </Link>


          {/* Items */}

          {inCart.map((item) => (
            <div
              key={item.slug}
              className="
            flex mb-5"
            >
              <Image
               className="mr-5 rounded"
                src="/products/1740507-00-A_1.jpg"
                width={100}
                height={100}
                alt="Product image"
                style={{
                  width: "120px",
                  height: "auto",
                }}
              />

              <div>
                <p>{item.title}</p>
                <p>${item.price}</p>
                <QuantitySelector quantity={2} />
                <button className="underline text-red-300 hover:text-red-600">
                  Remove
                </button>
              </div>
            </div>
          ))}
           </div>

           <div className="h-full w-full flex justify-center items-center">
           <div className="w-[400px] bg-white dark:bg-gray-900 rounded-xl  shadow-xl p-7 h-fit">
            <h3>Order summary</h3>

            <div className="grid grid-cols-2">
              <span>Nr | Products</span>
              <span className="text-right">3 Articles</span>
              <span>Subtotal</span>
              <span className="text-right">$ 100</span>
              <span>Taxes | 15%</span>
              <span className="text-right mb-5">$ 100</span>
              <span className="text-2xl mb-5 text-orange-400">| Total |:</span>
              <span className="text-right text-2xl text-red-500">$ 100</span>

            </div>

            <div className="mt-10">
              <Link href="/checkout/address" className="flex justify-center items-center  bg-green-600 hover:bg-transparent duration-500 border-transparent hover:border-b-orange-600 hover:border-b">
             <span className="mr-4">Checkout</span> <MdOutlineArrowRightAlt />
              </Link>
            </div>
           </div>
           </div>
        </div>
      </div>
    </div>
  );
}
