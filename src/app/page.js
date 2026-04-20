import Showcase from "@/components/Showcase";

export default function Home() {
  return (
      <main className="container mx-auto p-4 text-center mt-20">
        
        <h1 className="text-gray-500 font-serif text-2xl font-medium mb-1 italic">Welcome to</h1>

        <div className="relative w-full h-[360px] m-auto mb-4 rounded-lg">
          <img src="https://images.pexels.com/photos/37098388/pexels-photo-37098388.jpeg" alt="Furniture" className=" w-full h-full object-cover rounded-lg" />

          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
            
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub Logo" className="w-24 h-24 mb-4" />
            
            <h1 className="font-serif mx-4 text-white text-5xl font-bold mb-4">
              MyStore
            </h1>
            <p className="text-white text-xl">
              Quality Products for Your Home
            </p>
          </div>
        
        </div>
        
        <p className="text-gray-500 italic">
          Discover our collection of quality furniture for your home.
        </p>

        <Showcase />

      </main>
  );
}
