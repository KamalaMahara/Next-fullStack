
import Navbar from "../components/Navbar";
import Recipe from "../components/Recipe";


export default  async function Recipes() {
     const response = await fetch("http://localhost:3000/api/recipe/", {
      cache: "no-store"
    });
    const data = await response.json();
  const recipes=data.recipes
   console.log(recipes)
  return (
    <>
     <Navbar />
      <div className="bg-[#FEFDDF] min-h-screen mt-16">
        recipes.
        <Recipe recipes={recipes} />
      </div>
      
      
    </>
  )
}