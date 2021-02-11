export default class Singleton {
    private static instance: Singleton;
    public createdAt = Math.random();

    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
            return this;
        } else {
            return Singleton.instance;
        }
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
