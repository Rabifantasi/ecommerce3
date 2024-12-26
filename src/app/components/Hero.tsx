import Image from "next/image"; // Import the Image component

const Hero = () => {
  return (
    <section className="relative">
      {/* Hero Main Banner */}
      <div className="relative h-[90vh] flex flex-col justify-center items-center text-white overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-5">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Discover Timeless Fashion
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Shop the latest trends and explore collections crafted for you.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg text-lg">
              Shop Now
            </button>
            <button className="bg-gray-200 text-black py-3 px-6 rounded-lg hover:bg-gray-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Featured Sections */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          {/* Section Title */}
          <h2 className="text-4xl font-bold mb-12">Why Choose Us</h2>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Premium Quality */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-full h-32 flex justify-center items-center">
                <Image
                  src="/11.png"
                  alt="Premium Quality"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium Quality</h3>
              <p>Handcrafted with precision and care, our products speak elegance.</p>
            </div>

            {/* Eco-Friendly */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-full h-32 flex justify-center items-center">
                <Image
                  src="/12.png"
                  alt="Eco-Friendly Materials"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Eco-Friendly Materials</h3>
              <p>Sustainable and stylish—perfectly designed for a greener planet.</p>
            </div>

            {/* Innovative Designs */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <div className="w-full h-32 flex justify-center items-center">
                <Image
                  src="/13.png"
                  alt="Innovative Designs"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Innovative Designs</h3>
              <p>Stay ahead with cutting-edge designs that redefine fashion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Section */}
      <div className="bg-blue-500 text-white py-16 px-6 md:px-20 text-center relative">
        <Image
          src="/b.png" // Update with your image path
          alt="Your Alt Text"
          layout="fill" // Fills the parent container
          objectFit="cover" // Maintains the aspect ratio while covering the container
          className="opacity-30" // Adjust opacity as needed
        />
        <h2 className="text-3xl md:text-5xl font-bold mb-4 relative z-10">
          Ready to Elevate Your Style?
        </h2>
        <p className="text-lg md:text-2xl mb-6 relative z-10">
          Explore our collections and find what suits you best.
        </p>
        <button className="bg-white text-blue-500 py-3 px-6 rounded-lg hover:bg-gray-100 text-lg relative z-10">
          Start Shopping
        </button>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 px-6 md:px-20 bg-gray-100">
  <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Reviewer 1 */}
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <Image
        src="/220_11zon.png" // Replace with your reviewer's image path
        alt="Jane D."
        width={100} // Specify width for reviewer image
        height={100} // Specify height for reviewer image
        className="mx-auto rounded-full mb-4 object-cover" // Added object-cover for uniformity
      />
      <p className="text-lg italic mb-4">
        "Absolutely love the quality and style. Exceeded my expectations!"
      </p>
      <h3 className="text-xl font-bold">- Jane D.</h3>
    </div>
    {/* Reviewer 2 */}
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <Image
        src="/222_11zon.png" // Replace with your reviewer's image path
        alt="Mark T."
        width={100} // Specify width for reviewer image
        height={100} // Specify height for reviewer image
        className="mx-auto rounded-full mb-4 object-cover" // Added object-cover for uniformity
      />
      <p className="text-lg italic mb-4">
        "Eco-friendly and chic—perfect for conscious consumers."
      </p>
      <h3 className="text-xl font-bold">- Mark T.</h3>
    </div>
    {/* Reviewer 3 */}
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <Image
        src="/2222_11zon.png" // Replace with your reviewer's image path
        alt="Emily R."
        width={100} // Specify width for reviewer image
        height={100} // Specify height for reviewer image
        className="mx-auto rounded-full  mb-4 object-cover" // Added object-cover for uniformity
      />
      <p className="text-lg italic mb-4">
        "Fast delivery and amazing customer service. Highly recommend!"
      </p>
      <h3 className="text-xl font-bold">- Emily R.</h3>
    </div>
  </div>
</div>

    </section>
  );
};

export default Hero;
