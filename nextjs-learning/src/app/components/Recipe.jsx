import Card from "./Card";




const Recipe = ({ recipes }) => {

  return (
    <div className="flex gap-10 flex-wrap justify-center px-6 py-10 max-w-full mx-auto">
      {/* Section Heading */}
      <div className="w-full text-center py-8">
        <h1 className="text-3xl font-bold text-gray-800">Explore Our Delicious Recipes</h1>
        <p className="text-gray-600 mt-2">Discover a variety of recipes to satisfy your cravings.</p>
      </div>
      {recipes && recipes.length > 0 ? (
        recipes.map((recipe) => (
          <Card recipes={recipe} key={recipe.id} />
        ))
      ) : (
        <p className="text-gray-600">No recipes available.</p>
      )}
    </div>
  );
};

export default Recipe;
