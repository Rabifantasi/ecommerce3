import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home | E-Commerce Site</title>
        <meta name="description" content="Shop our unique collection" />
      </Head>
      <div className="bg-primary text-white h-96 flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold">Welcome to Our Store</h1>
        <p className="mt-4 text-xl">Explore our exclusive collection of products.</p>
        <a href="/products" className="mt-6 bg-accent text-primary px-6 py-3 rounded-lg hover:bg-white hover:text-primary transition duration-300">
          Shop Now
        </a>
      </div>
    </>
  );
};

export default HomePage;
