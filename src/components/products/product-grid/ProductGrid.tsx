import { Product } from "@/interfaces/product.interface"
import { ProductGridItem } from "./ProductGridItem";


interface Props {
  products: Product[];
}

const ProductGrid = ({products}: Props) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-10">
     {
        products.map( product => (
          <ProductGridItem
            key={ product.slug }
            product={ product }
          />
        ) )
      }

    </div>
  )
}

export default ProductGrid
