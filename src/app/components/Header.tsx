const Header = ({ title }: { title: string }) => {
    return (
      <header className="bg-blue-500 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>
      </header>
    );
  };
  
  export default Header;
  