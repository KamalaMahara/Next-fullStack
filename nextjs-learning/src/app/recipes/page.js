import Recipe from "../components/Recipe";






export default function Recipes() {
  return (
    <>
      <div className="bg-[#FEFDDF] min-h-screen">
        {/* Section Heading */}
        <div className="w-full text-center py-8">
          <h1 className="text-3xl font-bold text-gray-800">Explore Our Delicious Recipes</h1>
          <p className="text-gray-600 mt-2">Discover a variety of recipes to satisfy your cravings.</p>
        </div>
        <Recipe />
      </div>
      
      
    </>
  )
}