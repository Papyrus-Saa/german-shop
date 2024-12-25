// https://tailwindcomponents.com/component/hoverable-table


import { Title } from '@/components/ui/title/Title';
import Link from 'next/link';
import { IoCardOutline } from 'react-icons/io5';

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function() {
  return (
    <>
      <Title title="Orders" />

      <div className="mb-10 sm:p-8">
        <table className="min-w-full">
          <thead className="bg-gray-200 dark:dark:bg-gray-950 border-b border-b-gray-600">
            <tr>
              <th scope="col" className="text-sm font-medium  px-6 py-4 text-left">
                #ID
              </th>
              <th scope="col" className="text-sm font-medium  px-6 py-4  text-left">
                Nombre completo
              </th>
              <th scope="col" className="text-sm font-medium  px-6 py-4 text-left">
                Estado
              </th>
              <th scope="col" className="text-sm font-medium  px-6 py-4 text-left">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>

            <tr className="bg-white dark:bg-gray-900 border-b border-b-gray-600 transition duration-300 ease-in-out dark:hover:bg-gray-800">

              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">1</td>
              <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                Mark
              </td>
              <td className="flex items-center text-sm   font-light px-6 py-4 whitespace-nowrap">

                <IoCardOutline className="text-green-800" />
                <span className='mx-2 text-green-800'>Pagada</span>

              </td>
              <td className="text-sm  font-light px-6 ">
                <Link href="/orders/123" className="hover:underline px-2 bg-green-600">
                  Ver orden
                </Link>
              </td>

            </tr>

            <tr className="bg-white dark:bg-gray-900 border-b border-b-gray-600 transition duration-300 ease-in-out dark:hover:bg-gray-800">

              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">1</td>
              <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                Mark
              </td>
              <td className="flex items-center text-sm   font-light px-6 py-4 whitespace-nowrap">

                <IoCardOutline className="text-red-700" />
                <span className='mx-2 text-red-700'>No Pagada</span>

              </td>
              <td className="text-sm  font-light px-6 ">
                <Link href="/orders/123" className="hover:underline px-2 bg-red-600">
                  Ver orden
                </Link>
              </td>

            </tr>

          </tbody>
        </table>
      </div>
    </>
  );
}
