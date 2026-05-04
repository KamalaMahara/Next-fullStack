const AboutSection = () => {
  return (
    <section className="bg-green-100 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
            alt="Cooking"
            className="rounded-xl shadow-lg w-full h-[350px] object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            About RecipeShare
          </h2>

          <p className="text-gray-600 mb-4">
            RecipeShare is a place where food lovers come together to discover,
            cook, and share amazing recipes from around the world.
          </p>

          <p className="text-gray-600 mb-6">
            Whether you're a beginner or a passionate chef, our platform helps
            you explore new flavors, learn cooking techniques, and showcase your
            own creations.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-bold text-green-700">1000+</h3>
              <p className="text-sm text-gray-500">Recipes</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-bold text-green-700">500+</h3>
              <p className="text-sm text-gray-500">Users</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-bold text-green-700">50+</h3>
              <p className="text-sm text-gray-500">Categories</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-bold text-green-700">24/7</h3>
              <p className="text-sm text-gray-500">Access</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;