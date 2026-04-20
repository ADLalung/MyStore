import Link from "next/link";

export default function Showcase() {
    return (
        <section className="container mx-auto p-4 text-center mt-20">
            <div className="block">
                <p className="block text-lg font-bold text-white-500">Checkout our Products</p>
                
                <input type="text" placeholder="Search products..."
                    className="w-full text-white-500 
                    placeholder:text-gray-500 border border-olive-600 
                    rounded-lg py-2 px-4 mb-2 focus:outline-none"
                />
                
            </div>
            
            <div className="relative mx-auto w-auto h-64 bg-olive-700 
                rounded-lg flex items-center justify-center">
                <h2 className="text-2xl font-bold text-olive-500">Courosel Placeholder</h2>
            </div>
            <Link href="/products"
                className="inline-block mt-4 px-6 py-2 bg-olive-800 text-white 
                    rounded-lg hover:bg-olive-600 transition-colors duration-300">
                View all Products
            </Link>
        </section>
    );
}