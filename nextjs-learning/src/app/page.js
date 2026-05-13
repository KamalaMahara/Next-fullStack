
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


import Footer from "./components/Footer";
import AboutSection from "./about section/AboutSection";

import ShareRecipes from "./components/ShareRecipes";
import Recipe from "./components/Recipe";
import Link from "next/link";


 





export default async function Home() {
    const response = await fetch("http://localhost:3000/api/recipe/", {
      cache: "no-store"
    });
    const data = await response.json();
  const recipes=data.recipes
   
const previewRecipes = recipes.slice(0, 8);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <Recipe  recipes={previewRecipes} />
       <div className="text-center my-6">
        <Link href="/recipes">
          <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
            See More Recipes
          </button>
        </Link>
      </div>
      <ShareRecipes />
      <Footer />
     
    </>
  );
}
