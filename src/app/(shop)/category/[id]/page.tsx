// import { notFound } from "next/navigation";

import ProductGrid from "@/components/products/product-grid/ProductGrid";
import { Title } from "@/components/ui/title/Title";
import { category } from "@/interfaces/product.interface";
import { initialData } from "@/seed/seed";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: category;
  };
}

// Página asíncrona en Next.js 15
export default function Page({ params }: Props) {
  // Acceso asíncrono a `params`
  const { id } = params;

  const Products = seedProducts.filter((product) => product.gender === id);

  const labels: Record<category, string> = {
    men: "Men",
    women: "Women",
    kid: "Kid",
    unisex: "Unisex",
  };

  // if( id === 'kids') {
  //  notFound();
  // }

  return (
    <>
      <Title
        title={`Articles for ${labels[id]}`}
        subtitle="All products"
        className="mb-2"
      />

      <ProductGrid products={Products} />
    </>
  );
}
