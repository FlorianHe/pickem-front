import { Game } from "./game"
import { Team } from "./team"

export interface Drake {
    id:number
    type:string
    game?: Game
    team: Team
}