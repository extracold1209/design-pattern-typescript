/* eslint-disable @typescript-eslint/ban-ts-comment */
import {Car, Bike} from './index';

test('prototype pattern', () => {
    const car1 = Car;

    // @ts-ignore
    const bike1 = new Bike('bar');

    // @ts-ignore
    const bike2 = new Bike('foo');

    car1.getModel();
    car1.getType();

    bike1.getModel();
    bike2.getModel();
})
