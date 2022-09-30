export abstract class AxisMind
{
    name: string;               // unique identifier for construct instance
    type: string;               // identifier denoting minds primary function
    core: RoomObject;           // host object to determine room/position data of mind instance
    memory: any;

    constructor(type: string, host: {name: string, core: RoomObject})
    {
        this.name = host.name + ":" + type; // e.g., "RadiolarianPool:E28N14X10Y48:Propogate"
        this.type = type;
        this.core = host.core;
    }

    abstract init(): void;

    abstract run(): void;
}
