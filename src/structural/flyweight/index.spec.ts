import ColorMaker from './index';

test('FlyweightPattern', () => {
    const colorMaker = new ColorMaker();

    const red = colorMaker.getColorObject('red');
    const green = colorMaker.getColorObject('green');
    const blue = colorMaker.getColorObject('blue');

    const red1 = colorMaker.getColorObject('red');
    const red2 = colorMaker.getColorObject('red');
    const red3 = colorMaker.getColorObject('red');
    const red4 = colorMaker.getColorObject('red');

    expect(red).toEqual(red1);
    expect(red).toEqual(red2);
    expect(red).toEqual(red3);
    expect(red).toEqual(red4);
});
