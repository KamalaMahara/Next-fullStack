import { recipesTable } from "../../../db/schema";
import {db} from "../../../db/db";

export async function GET(){
  const datas= await db.select().from(recipesTable)
   return Response.json({
    recipes:datas
   })
}

export async function POST(Request){
 
  try{
     const data = await Request.json();
    await db.insert(recipesTable).values(data)
    return Response.json({
      message:"Recipe data inserted successfully"
    },{status:201})
  } catch(error){
    return Response.json({
      message:"Error inserting recipe data"
    }, { status: 500 });
  }
  }

  
