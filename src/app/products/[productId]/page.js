import NotFound from "../../not-found.js";

export async function generateStaticParams() {
  return [
    { productId: 'sofa-01' },
    { productId: 'table-02' },
    { productId: 'chair-03' }
  ];
}

export default async function ProductPage({ params }) {
    const productId = ( await params).productId;
    if (parseInt(productId)>150){
        return <NotFound />
    }
    return (
        <section className="container mx-auto p-5 mt-20 mx-auto">
            <h1 className="text-2xl font-bold mb-4">Product ID: {productId}</h1>
            <img src={`https://via.placeholder.com/600x400?text=Product+${productId}`} alt={`Product ${productId}`} className="w-full h-auto rounded-lg mb-4" />
            <p className="text-gray-700">This is a placeholder description for product {productId}. More details about this product will be available soon.</p>
        </section>
    )
}