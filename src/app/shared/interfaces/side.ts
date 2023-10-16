import { Ban } from "./ban"
import { Pick } from "./pick"
import { Team } from "./team"
import { DrakeKilled } from "./drakeKilled"

export class Side {
    constructor(public team: Team,
        public ban: Ban[],
        public pick: Pick[],
        public drakeKilled : DrakeKilled[]) {}
}