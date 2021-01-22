export interface Sizable {
    getSize(): number;
}

export class Rectangle implements Sizable {
    private readonly width: number;
    private readonly height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }

    getSize(): number {
        return this.width * this.height;
    }
}

/**
 * 이 클래스가 Rectangle 의 Adaptor, 혹은 Wrapper 가 된다.
 * 이 클래스는 Rectangle 의 짧은 변을 기준으로 정사각형을 나타내는 클래스이다.
 */
export class SquareWrapper implements Sizable {
    private readonly side: number;

    constructor(rectangle: Rectangle) {
        this.side = Math.min(rectangle.getWidth(), rectangle.getHeight());
    }

    getSize(): number {
        return this.side * this.side;
    }
}
