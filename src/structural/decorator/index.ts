export interface Door {
    getDoorSpecification(): string[];
}

export class BasicDoor implements Door {
    getDoorSpecification() {
        return ['wood'];
    }
}

abstract class DoorDecorator implements Door {
    private basicDoor: Door;
    abstract doorSpec: string;

    constructor(door: Door) {
        this.basicDoor = door;
    }

    getDoorSpecification(): string[] {
        return this.basicDoor.getDoorSpecification().concat(this.doorSpec);
    }
}

export class WindowDoorDecorator extends DoorDecorator {
    doorSpec = 'window';
}

export class DogDoorDecorator extends DoorDecorator {
    doorSpec = 'dogHole';
}

export class StripeShapeDoorDecorator extends DoorDecorator {
    doorSpec = 'stripeShape';
}

