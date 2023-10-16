import { Champion } from "./champion"
import { Game } from "./game"
import { Player } from "./player"
import { Team } from "./team"

export interface Pick {
    id : number
    champion: Champion
    player : Player
    team: Team
    game?: Game
}