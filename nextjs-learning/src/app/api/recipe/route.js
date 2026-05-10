import { recipesTable } from "../../../db/schema";
import {db} from "../../../db/db";

export async function GET(){
   return response.json({
    message:"hello world"
   })
}

export async function POST(request){
  let data = await request.join();
  try{
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
