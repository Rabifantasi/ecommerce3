import React from "react";
import Image from "next/image"; // Single import for Image component

const HeroLanding = () => {
  return (
    <main className="bg-gray-100">
      {/* Main Banner Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/hero-landing.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full">
          <h1 className="text-6xl font-bold mb-4">Welcome to Your Dream Style</h1>
          <p className="text-lg mb-8">Discover timeless pieces curated for elegance and comfort.</p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg rounded-lg">
              Shop Now
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-800 hover:bg-gray-300 text-lg rounded-lg">
              Explore More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
  <div className="container mx-auto px-6 text-center">
    {/* Section Title */}
    <h2 className="text-4xl font-bold mb-12">Why Choose Us</h2>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Premium Quality */}
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className=" h-32 flex justify-center items-center">
          <Image
            src="/quality.png"
            alt="Premium Quality"
            width={128}
            height={100}
            
          />
        </div>
        <h3 className="text-2xl font-bold mb-2">Premium Quality</h3>
        <p>Handcrafted with precision and care, our products speak elegance.</p>
      </div>

      {/* Eco-Friendly */}
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className=" h-32 flex justify-center items-center">
          <Image
            src="/eco.png"
            alt="Eco-Friendly Materials"
            width={128}
            height={128}
            
          />
        </div>
        <h3 className="text-2xl font-bold mb-2">Eco-Friendly Materials</h3>
        <p>Sustainable and stylish—perfectly designed for a greener planet.</p>
      </div>

      {/* Innovative Designs */}
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className=" h-32 flex justify-center items-center">
          <Image
            src="/design.png"
            alt="Innovative Designs"
            width={128}
            height={100}
           
          />
        </div>
        <h3 className="text-2xl font-bold mb-2">Innovative Designs</h3>
        <p>Stay ahead with cutting-edge designs that redefine fashion.</p>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section className="py-20 bg-blue-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-6 bg-white text-black rounded-lg shadow-lg">
              <p className="italic mb-4">"Amazing quality and unmatched designs!"</p>
              <h3 className="font-bold">- John Doe</h3>
            </div>
            
            <div className="p-6 bg-white text-black rounded-lg shadow-lg">
              <p className="italic mb-4">"Loved the eco-friendly approach."</p>
              <h3 className="font-bold">- Jane Smith</h3>
            </div>
            
            <div className="p-6 bg-white text-black rounded-lg shadow-lg">
              <p className="italic mb-4">"Exceptional service and product variety."</p>
              <h3 className="font-bold">- Emily Clark</h3>
            </div>
          
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroLanding;
