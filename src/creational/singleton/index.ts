export default class Singleton {
    private static instance: Singleton;
    public createdAt = Date.now();

    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        return this;
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public print(): void {
        console.log('singleton ', this.createdAt);
    }
}
