import ProductGrid from "@/components/products/product-grid/ProductGrid";
import { Title } from "@/components/ui/title/Title";
import { category } from "@/interfaces/product.interface";
import { initialData } from "@/seed/seed";

const seedProducts = initialData.products;

interface Props {
  params: Promise<{
    id: category;
  }>;
}


export default async function Page({ params }: Props) {
  // Accede a params de manera asincrónica
  const { id } = await params;

  const Products = seedProducts.filter((product) => product.gender === id);

  const labels: Record<category, string> = {
    men: "Men",
    women: "Women",
    kid: "Kid",
    unisex: "Unisex",
  };

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
