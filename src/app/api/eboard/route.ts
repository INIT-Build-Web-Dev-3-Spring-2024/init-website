import { team_members } from "./InitTeam";

export interface Member {
  image: string
  name: string
  linkedin: string
  position: string
}

export async function GET(request: Request) {
  return new Response(JSON.stringify(team_members))
}
