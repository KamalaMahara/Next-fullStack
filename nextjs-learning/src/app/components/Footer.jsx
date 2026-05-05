import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-green-700 text-white ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div >


          <h2 className="text-2xl font-bold mb-4">RecipeShare </h2>
          <p className="text-gray-300 text-sm">
            Discover, cook, and share your favorite recipes with food lovers around the world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Recipes</li>
            <li className="hover:text-white cursor-pointer">Share Recipe</li>
            <li className="hover:text-white cursor-pointer">About</li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <p className="text-gray-300 text-sm mb-3">
            Follow us for daily recipe inspiration 🍲
          </p>
          <div className="flex gap-4">
            <span className="hover:text-green-300 cursor-pointer">Facebook</span>
            <span className="hover:text-green-300 cursor-pointer">Instagram</span>
            <span className="hover:text-green-300 cursor-pointer">YouTube</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700 text-center text-sm text-gray-400 py-4">
        © {new Date().getFullYear()} RecipeShare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;