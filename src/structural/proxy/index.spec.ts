import {time, RealImage, ProxyImage} from './index';

describe('ProxyPattern', () => {
    beforeEach(() => {
        time.timeElapsed = 0;
    });

    test('without Proxy', () => {
        const image = new RealImage();

        image.displayImage();
        image.displayImage();
        image.displayImage();
        image.displayImage();
        image.displayImage();
        console.log('elapsed time: ', time.timeElapsed);
    });

    test('with Proxy', () => {
        const image = new ProxyImage();

        image.displayImage();
        image.displayImage();
        image.displayImage();
        image.displayImage();
        image.displayImage();
        console.log('elapsed time: ', time.timeElapsed);
    });
});
