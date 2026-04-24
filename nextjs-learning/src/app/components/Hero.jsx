export default function Hero() {
  return (
    <>
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center">


          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Discover Delicious Recipes <br />
              <span className="text-green-600">Made Just for You</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Find healthy, quick, and tasty recipes tailored to your preferences. Explore categories, save favorites, and start cooking today.
            </p>


            <div className="mt-8 flex justify-center md:justify-start">
              <div className="relative w-full max-w-md">
                <input type="text" placeholder="Search recipes..."
                  className="w-full placeholder:text-gray-500 placeholder:opacity-70 rounded-full border border-gray-300 pl-5 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 shadow-sm" />
                <button className="absolute right-3 top-3 text-gray-500 hover:text-green-600">
                  🔍
                </button>
              </div>
            </div>


            <div className="mt-8 flex space-x-4 justify-center md:justify-start">
              <a href="/recipes" className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition">
                Explore Recipes
              </a>
              <a href="/signup" className="bg-white border border-green-600 text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition">
                Join Now
              </a>
            </div>
          </div>


          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Delicious food"
              className="rounded-xl shadow-lg w-full max-w-md" />
          </div>
        </div>
      </section>

    </>
  )
}