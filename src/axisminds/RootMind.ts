import { Pyramidion } from "constructs/Pyramidion";
import { AxisMind } from "./AxisMind";

export class RootMind extends AxisMind
{
    subnets: { [name: string]: Pyramidion }; // hash of all payramidion subnets (key is the name of core pyramidion within the subnet)

    constructor(host: {name: string, core: RoomObject})
    {
        super("Root", host);
        this.subnets = {};
        this.init();
    }

    init(): void
    {
        for (let name in this.subnets)
        {
            this.subnets[name].init()
        }
    }

    run(): void
    {
        for (let name in this.subnets)
        {
            this.subnets[name].run()
        }
    }
}
