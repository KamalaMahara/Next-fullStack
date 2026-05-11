import { useEffect } from "react";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

const Create = () => {
  const fetchRecipe =() => {
     axios.get("http://localhost:3000 api/recipe/")
  }
  useEffect(()=>{
    fetchRecipe()
  },[])
  return (
    <>
     <Navbar />
    <section className="py-18 my-12 bg-gray-50">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-green-600">
          Share Your Recipe
        </h2>
      
       <Form text="Create Recipe"  />
      </div>
    </section>
    </>
  );
};

export default Create;
