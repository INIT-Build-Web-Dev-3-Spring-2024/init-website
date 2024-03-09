import { chapters } from "./chapters";

export interface Chapter {
  image: string
  name: string
  description: string
}

export async function GET(request: Request) {
  return new Response(JSON.stringify(chapters))
}