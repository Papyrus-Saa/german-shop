import Link from 'next/link';
import { initialData } from '@/seed/seed';
import Image from 'next/image';
import { Title } from '@/components/ui/title/Title';

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function () {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

      <div className="flex flex-col w-[1000px]">

        <Title title="Order Verification" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Cart */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Adjust Items</span>
            <Link href="/cart" className="underline mb-5 text-green-500">
              Edit Cart
            </Link>

            {/* Items */}
            {productsInCart.map(product => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  style={{
                    width: '100px',
                    height: '100px',
                  }}
                  alt={product.title}
                  className="mr-5 rounded"
                />

                <div>
                  <p>{product.title}</p>
                  <p>${product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout - Order Summary */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-7">

            <h2 className="text-2xl mb-2">Shipping Address</h2>
            <div className="mb-10">
              <p className="text-xl">Ramon Saavedra</p>
              <p>123 Fictional Street</p>
              <p>Downtown</p>
              <p>District of Toronto</p>
              <p>Toronto, Canada</p>
              <p>Postal Code: M1B 2K4</p>
              <p>123-456-7890</p>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

            <h2 className="text-2xl mb-2">Order Summary</h2>

            <div className="grid grid-cols-2">

              <span>No. of Products</span>
              <span className="text-right">3 items</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Taxes (15%)</span>
              <span className="text-right">$ 100</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">$ 100</span>
            </div>

            <div className="mt-5 mb-2 w-full">

              <p className="mb-5">
                {/* Disclaimer */}
                <span className="text-xs">
                  By clicking &quot;Place Order&quot;, you agree to our{' '}
                  <a href="#" className="underline">terms and conditions</a> and{' '}
                  <a href="#" className="underline">privacy policy</a>.
                </span>
              </p>

              <Link
                className="flex justify-center bg-green-600 hover:bg-transparent duration-500 border-transparent hover:border-b-orange-600 hover:border-b"
                href="/orders/123"
              >
                Place Order
              </Link>
              {/* ${titleFont.className} */}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
