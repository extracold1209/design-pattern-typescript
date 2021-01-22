import {Rectangle, SquareWrapper} from './index';

test('Adapter(Wrapper) Pattern', function () {
    const rectangle = new Rectangle(10, 20);

    expect(rectangle.getWidth()).toEqual(10);
    expect(rectangle.getHeight()).toEqual(20);
    expect(rectangle.getSize).toBeDefined();

    const square = new SquareWrapper(rectangle);

    expect(square.getSize()).toEqual(
        Math.pow(
            Math.min(rectangle.getWidth(), rectangle.getHeight()),
            2
        )
    );
});
