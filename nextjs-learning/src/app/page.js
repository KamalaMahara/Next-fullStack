
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


import Footer from "./components/Footer";
import AboutSection from "./about section/AboutSection";

import ShareRecipes from "./components/ShareRecipes";
 import Recipes from "../app/recipes/page"




export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <Recipes />
      <ShareRecipes />
      <Footer />
     
    </>
  );
}
