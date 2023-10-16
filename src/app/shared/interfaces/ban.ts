import { Champion } from "./champion"
import { Game } from "./game"
import { Team } from "./team"

export interface Ban {
    id: number
    champion: Champion
    team: Team
    game?: Game
}