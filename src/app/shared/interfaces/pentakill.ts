import { Game } from "./game"
import { Player } from "./player"

export interface Pentakill {
    id:number
    player:Player
    game?: Game
}