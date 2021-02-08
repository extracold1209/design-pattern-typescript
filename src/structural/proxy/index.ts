export interface Image {
    displayImage(): void;
}


export const time = {
    timeElapsed: 0
};

export class RealImage implements Image {
    constructor() {
        time.timeElapsed += 4;
        console.log(`real Image constructor (+4s) : ${time.timeElapsed}s`);
    }

    displayImage(): void {
        time.timeElapsed += 2;
        console.log(`real image display (+2s) : ${time.timeElapsed}s`);
    }
}

export class ProxyImage implements Image {
    private realImage: RealImage;

    displayImage(): void {
        if (!this.realImage) {
            this.realImage = new RealImage();
        }
        time.timeElapsed += 1;
        console.log(`proxy image will be enhanced loading (+1s) : ${time.timeElapsed}s`);
    }
}
