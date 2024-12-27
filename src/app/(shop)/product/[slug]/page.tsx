import QuantitySelector from "@/components/product/quantity-selector/QuantitySelector";
import SizeSelector from "@/components/product/size-selector/SizeSelector";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import notFound from "../../category/not-found";
import ProductSlideShow from "@/components/product/slideshow/ProductSlideShow";
import ProductMobileSlideShow from "@/components/product/slideshow/ProductMobileSlideShow";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;


  const product = initialData.products.find((product) => product.slug === slug);

  if( !product){
    notFound();
  }

  return (
    <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* SlideShow */}
      <div className="col-span-1 md:col-span-2">

        {/* Mobile Slideshow */}

        <ProductMobileSlideShow
         title={product?.title}
         images={product?.images}
         className="block md:hidden"
        />

        {/* Desktop Slideshow */}
        <ProductSlideShow
        title={product?.title || "Pic"}
        images={product?.images || []}
        className="hidden md:block"
        />
      </div>

      <div className="col-span-1 px-5">

        <h1 className={`${titleFont.className} antialiased font-bold `}>
          {product?.title}
        </h1>
        <p className="text-lg mb-5">${product?.price}</p>

        {/* Selector de tallas */}
        <SizeSelector
        selectedSize={product?.sizes[3]}
        availableSizes={ product?.sizes}
        />


        {/* Selector de cantidad */}
        <QuantitySelector
        quantity={2}
        />

        {/* Button */}

        <button className="px-3 bg-green-600 hover:bg-transparent duration-500 border-transparent hover:border-b-orange-600 hover:border-b mb-8">Add to Cart</button>

        {/* Description */}

        <h3 className="font-bold text-sm">Description</h3>
        <p className="font-light">

          {product?.description}
        </p>
      </div>
    </div>
  );
}
