import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">


            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="flex items-center gap-2">
                <Image
                  src="/favicon.ico"
                  alt="RecipeShare Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <span className="text-xl font-bold text-green-600">
                  RecipeShare
                </span>
              </a>
            </div>


            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">
                Home
              </Link>
              <Link href="/recipes" className="text-gray-700 hover:text-green-600 font-medium">
                Recipes
              </Link>
              <Link href="/create" className="text-gray-700 hover:text-green-600 font-medium">
                Create Recipe
              </Link>
            </div>


            <div className="flex items-center space-x-4">
              <div className="relative">
                <input type="text" placeholder="Search recipes..."
                  className="rounded-full border border-gray-300 pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
                <button className="absolute right-2 top-2 text-gray-500 hover:text-green-600">
                  🔍
                </button>
              </div>
              <Link href="/login" className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
                Login
              </Link>
            </div>


            <div className="md:hidden flex items-center">
              <button id="mobile-menu-btn" className="text-gray-700 hover:text-green-600 focus:outline-none">
                ☰
              </button>
            </div>
          </div>
        </div>


        <div id="mobile-menu" className="hidden md:hidden bg-white shadow-md">
          <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-green-50">
            Home
          </Link>
          <Link href="/recipes" className="block px-4 py-2 text-gray-700 hover:bg-green-50">
            Recipes
          </Link>
          <Link href="/categories" className="block px-4 py-2 text-gray-700 hover:bg-green-50">
            Categories
          </Link>
          <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-green-50">
            About
          </Link>
          <Link href="/login" className="block px-4 py-2 text-green-600 font-semibold hover:bg-green-50">
            Login
          </Link>
        </div>
      </nav>




    </>
  )
}