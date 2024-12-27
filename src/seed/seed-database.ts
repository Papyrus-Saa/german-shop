import prisma from "../lib/prisma";
import { initialData } from "./seed";

async function main() {

  // Borrar registros previos
  await Promise.all([
    prisma.productImage.deleteMany(),
    prisma.product.deleteMany(),
    prisma.category.deleteMany(),
  ]);


  const { categories, products} = initialData;

  const categoriesData = categories.map(category => ({
    name: category
  }))


  await prisma.category.createMany({
    data: categoriesData
  })

  console.log('Seed, ejecutado correctamente');

}

(() => {
  main();
})();
