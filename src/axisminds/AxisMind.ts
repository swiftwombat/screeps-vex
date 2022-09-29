export abstract class AxisMind
{
    name: string;               // unique identifier for construct instance
    host: RoomObject;           // host object to determine room/position data of mind instance
    memory: any;

    constructor(name: string, host: RoomObject)
    {
        this.name = name; // TO DO: generate unique instance name
        this.host = host;
    }

    abstract init(): void;

    abstract run(): void;
}
