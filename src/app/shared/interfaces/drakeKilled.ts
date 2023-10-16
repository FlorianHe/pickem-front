import { Drake } from "./drake"
import { Game } from "./game"
import { Team } from "./team"

export interface DrakeKilled {
    id:number
    drake: Drake
    game?: Game
    team: Team
}