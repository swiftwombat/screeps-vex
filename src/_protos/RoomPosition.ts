interface RoomPosition {
    serialize(): string;
}

RoomPosition.prototype.serialize = function (): string {
    var serial = this.roomName + "X" + this.x + "Y" + this.y;
    return serial;
}
