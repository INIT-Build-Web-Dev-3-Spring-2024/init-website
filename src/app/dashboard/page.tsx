import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/dist/server/api-utils";


export default async function Dashboard(){
    const session = await getServerSession(options)

    if (!session){
        // redirect()
    }
  return (
    <div>Dashboard</div>
  )
}