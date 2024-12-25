import clsx from 'clsx';
import type { Sizes } from '../../../interfaces/product.interface';



interface Props {
  selectedSize?: Sizes;
  availableSizes?: Sizes[];
}

const SizeSelector = ({selectedSize, availableSizes}: Props) => {
  return (
    <div className='my-5'>
      <h3 className='font-bold mb-4'>Available sizes</h3>

      <div className='flex'>

        {
          availableSizes?.map(size =>
            <button className={
              clsx(
                'mx-2 hover:border-b-red-500 border-blue-600', {
                  'border-b': size === selectedSize
                }
              )
            }
            key={size}
            >

              {size}
            </button>
          )
        }
      </div>
    </div>
  )
}

export default SizeSelector
