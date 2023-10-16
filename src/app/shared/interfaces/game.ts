import { BO } from "./bO"
import { Team } from "./team"

export interface Game {
    id:number
    baronSteals:number
    duration:string
    teamBlue : Team
    teamRed : Team
    teamWinner : Team
    bo : BO
}