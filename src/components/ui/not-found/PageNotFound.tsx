

import Image from 'next/image';
import Link from 'next/link';
import { titleFont } from '@/config/fonts';

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">

      <div className="text-center px-5 mx-5">
        <h2 className={ `${ titleFont.className } antialiased text-9xl` }>404</h2>
        <p className="font-semibold text-xl mb-4">Pu f f f !! Something Went... Unimaginably Wrong 🛠️.</p>
        <p className="font-light">
          <Link
            href='/'
            className="font-normal  transition-all"
            >
            <span className='bg-gray-300 hover:bg-gray-400 dark:bg-zinc-900 dark:hover:bg-zinc-950 rounded-md p-2 duration-500'>Go back</span>
          </Link>
        </p>
      </div>



      <div className="px-5 mx-5">
        <Image
          src="/imgs/logo-pic.png"
          alt="Starman"
          className="p-5 sm:p-0"
          width={ 150 }
          height={ 150 }
        />

      </div>


    </div>
  );
};
