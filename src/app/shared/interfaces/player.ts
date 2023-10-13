import { Team } from "./team"

export interface Player {
    id:number
    name:string
    role:string
    team: Team
}