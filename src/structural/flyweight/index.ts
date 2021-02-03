type ColorObject = {
    name: string;
    key: number;
}

/* flyweight pattern factory */
export default class ColorMaker {
    private cache: Map<string, ColorObject> = new Map();

    getColorObject(color: string) {
        if (this.cache.has(color)) {
            console.log('cached object returned ', color);
            return this.cache.get(color);
        }

        const colorObject = {
            name: color,
            key: Array.prototype.reduce.call(color, (result, char) => {
                return result + char.charCodeAt(0);
            }, 0)
        };

        console.log('new object created. ', color);
        this.cache.set(color, colorObject);
        return colorObject;
    }
}
