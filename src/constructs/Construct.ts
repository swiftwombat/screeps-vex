import { AxisMind } from "axisminds/AxisMind";

export abstract class Construct
{
    name: string;               // unique identifier for construct instance
    type: string;               // identifier denoting construct function
    construct: Construct;       // the parent construct (references itself if no parents)
    core: RoomObject;           // core object to determine room/position data of cluster instance (i.e., structure)
    memory: any;
    mind: AxisMind | undefined; // operating axis mind (undefined if construct is not a host)

    constructor(type: string, construct: Construct | undefined, core: RoomObject)
    {
        this.type = type;
        this.name = type + ":" + core.pos.serialize(); // (e.g., "RadiolarianPool:E28N14X10Y48")
        this.construct = construct ?? this;
        this.core = core;
    }

    abstract init(): void;

    abstract run(): void;
}
