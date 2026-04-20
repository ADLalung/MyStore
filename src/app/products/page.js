export default function ProductsPage() {
    return (
        <section className="container mx-auto p-5 mt-20">
            <h1 className="text-3xl font-bold mb-6 ">Our Products</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((id) => (
                    <a key={id} href={`/products/${id}`} className="block bg-olive-800 rounded-lg p-4 hover:bg-olive-600 transition">
                        <img src={`https://via.placeholder.com/400x300?text=Product+${id}`} alt={`Product ${id}`} className=" w-full h-48 object-cover rounded-sm mb-4" />
                        <h2 className="text-xl font-semibold mb-2">Product {id}</h2>
                        <p className="text-black">This is a brief description of product {id}. Click to see more details.</p>
                    </a>
                ))}
            </div>
        </section>
    );
}