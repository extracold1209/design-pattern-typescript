import {BasicDoor, DogDoorDecorator, Door, StripeShapeDoorDecorator, WindowDoorDecorator} from './index';

test('DecoratorPattern', function () {
    const basicDoor: Door = new BasicDoor();

    const windowDoor: Door = new WindowDoorDecorator(basicDoor);
    const windowDoorWithDogHole: Door = new DogDoorDecorator(windowDoor);

    const stripeWindowDoorWithDogHole: Door = new StripeShapeDoorDecorator(windowDoorWithDogHole);

    expect(stripeWindowDoorWithDogHole.getDoorSpecification()).toEqual(
        expect.arrayContaining(['wood', 'window', 'dogHole', 'stripeShape'])
    );
});
