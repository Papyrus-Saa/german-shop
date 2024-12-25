import ProductGrid from "@/components/products/product-grid/ProductGrid";
import { Title } from "@/components/ui/title/Title";
import { initialData } from '../../seed/seed';


const products  = initialData.products;

export default function Home() {
  return (
    <div className="dark:bg-stone-950 bg-gray-200 sm:p-2">
      <Title title="Shop" subtitle="Have fun shopping!" className="mb-2" />


      <ProductGrid
      products={products}
      />
    </div>
  );
}
