import NotFound from "../../not-found.js";
import Image from 'next/image';

export async function generateStaticParams() {
  const productIds = await fetchProductIds();
  return productIds.map(id => ({ productId: id }));
}

export default async function ProductPage({ params }) {
    if (+productId > 150) {
      return <NotFound />
    }
    return (
    <section className="container mx-auto p-5 mt-20 mx-auto">
        <h1 className="text-2xl font-bold mb-4">Product ID: {productId}</h1>
        <Image 
          src={`https://via.placeholder.com/600x400?text=Product+${productId}`} 
          alt={`Product ${productId}`} 
          width={600}
          height={400}
          className="w-full h-auto rounded-lg mb-4"
          priority // or use lazy loading (default)
        />
        <p className="text-gray-700">This is a placeholder description for product {productId}. More details about this product will be available soon.</p>
    </section>
);
}
