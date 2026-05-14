

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DeleteRecipe from "./components/DeleteRecipe";

export default async function SingleRecipePage({ params }) {
  const { id } = await  params; 
  try {
    const response = await fetch(`http://localhost:3000/api/recipe/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch recipe");
    }

    const data = await response.json();
    const recipe = data.recipe[0] //  access the first item in the recipe array

    return (
      <>
        <Navbar />
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center justify-center gap-4">
          <div className="max-w-5xl  px-2 py-12">
            <div className="flex flex-wrap -mx-6">
              {/*  IMAGE SECTION */}
              <div className="w-full md:w-1/2  mb-4 ">
                
                  <img
                    src="https://i.pinimg.com/736x/65/95/77/659577601db80b1eaf9dc497f30e02df.jpg"
                    alt={recipe?.title}
                    className="w-screen h-[500px] object-cover rounded-xl transition duration-300"
                  />
                
              </div>

              {/*  DETAILS SECTION */}
              <div className="w-full md:w-1/2 px-6">
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    {recipe?.title}
                  </h1>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {recipe?.description}
                  </p>

                  <div className="flex flex-wrap justify-evenly gap-4">
                    <Link href={`/edit/${recipe?._id}`} className="flex-1">
                      <button className="w-full bg-yellow-500 text-white py-2 rounded-lg font-medium hover:bg-yellow-600 transition">
                        Edit
                      </button>
                    </Link>
                    <DeleteRecipe recipeId={recipe?.id}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-red-500">Failed to load recipe.</p>
        </div>
        <Footer />
      </>
    );
  }
}
