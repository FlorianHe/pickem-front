import { Game } from "./game"
import { Player } from "./player"

export interface KDA {
    id : number
    kills : number
    death : number
    assist: number
    player : Player
    game?: Game
    kda?: number
}