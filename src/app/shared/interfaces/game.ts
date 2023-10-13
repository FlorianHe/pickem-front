import { Team } from "./team"

export interface Game {
    id:number
    baronSteals:number
    duration:string
    teamAway : Team
    teamHome : Team
    BO : number
}