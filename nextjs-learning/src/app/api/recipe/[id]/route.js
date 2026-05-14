import { db } from "../../../../db/db";
import { recipesTable } from "../../../../db/schema";
import { eq } from "drizzle-orm";

export async function GET(request, context) {
  try {
    
    const { id } = await context.params;

    const recipeData = await db
      .select()
      .from(recipesTable)
      .where(eq(recipesTable.id, Number(id)));

    if (recipeData.length === 0) {
      return Response.json(
        { message: "No recipe found with that id" },
        { status: 404 }
      );
    }

    return Response.json(
      {
        message: "Recipe data fetched successfully",
        recipe: recipeData,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "Error fetching recipe", error: error.message },
      { status: 500 }
    );
  }
}


export async function DELETE(request,context){
  try {
      const { id } = await context.params;
      await db.delete(recipesTable).where(eq(recipesTable.id, Number(id)));

      return Response.json({ 
        message: "Recipe deleted successfully" },
         { status: 200 });

  } catch (error) {
      return Response.json(
        { message: "Error deleting recipe", error: error.message },
        { status: 500 }
      );
  }
}

export async function PATCH(request, context) {
  try {
    const { id } = await context.params;
    const data = await request.json(); // must be valid JSON

    await db
      .update(recipesTable)
      .set(data) // update with fields from body
      .where(eq(recipesTable.id, Number(id)));

    return Response.json(
      { message: "Recipe edited successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "Error editing the recipe", error: error.message },
      { status: 500 }
    );
  }
}