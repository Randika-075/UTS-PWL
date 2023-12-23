const FooterLayout = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-4">
        <div className="flex justify-center items-center">
          <span className="text-sm">&copy; {year} Sells.com</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
