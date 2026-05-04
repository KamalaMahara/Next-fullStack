const ShareRecipeCTA = () => {
  return (
    <section className="bg-gradient-to-r from-green-100 to-green-50 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Have a Recipe to Share? 🍳
          </h2>
          <p className="text-gray-600 mb-6">
            Share your favorite dishes with the community and inspire others to cook something amazing.
          </p>
          <a href="/create">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md">
              Share Your Recipe
            </button>
          </a>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1495521821757-a1efb6729352"
            alt="Cooking"
            className="rounded-xl shadow-lg w-full h-[300px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default ShareRecipeCTA;