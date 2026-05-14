"use client";

import { useRouter } from "next/navigation"


const DeleteRecipe = ({ recipeId }) => {
  const router = useRouter();

  const deleteRecipe = async () => {
    const confirmed = window.confirm("are you sure want to delete this recipe?")

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/recipe/" + recipeId, {
        method: "DELETE"
      })
      if (!response.ok) {
        throw new Error("failed to delete the recipe")
      }
      alert("recipe deleted successfully")
      router.push("/recipes");
    }
    catch (error) {
      alert("error deleting the recipe: " + error.message)
    }


  }
  return (
    <button className="flex-1 bg-red-500 text-white py-2 rounded-lg font-medium hover:bg-red-600 transition" onClick={deleteRecipe}>
      Delete
    </button>
  )
}
export default DeleteRecipe
