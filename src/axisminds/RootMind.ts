import { Pyramidion } from "constructs/Pyramidion";

export class RootMind
{
    pyramidions: { [name: string]: Pyramidion }; // hash of all payramidions (key is name of wrapped room)

    constructor()
    {
        this.pyramidions = {};
        this.init();
    }

    init(): void
    {
        for (let name in this.pyramidions)
        {
            this.pyramidions[name].init()
        }
    }

    run(): void
    {
        for (let name in this.pyramidions)
        {
            this.pyramidions[name].run()
        }
    }
}
