import { Pyramidion } from "constructs/Pyramidion";
import { AxisMind } from "./AxisMind";

export class RootMind extends AxisMind
{
    pyramidions: { [name: string]: Pyramidion }; // hash of all payramidions (key is the name of core pyramidion within the subnet)

    constructor()
    {
        super("Root", {name: "Network", core: undefined});
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
