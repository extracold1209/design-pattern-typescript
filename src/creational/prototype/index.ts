const vehicle = {
    getType() {
        console.log('This vehicle\'s type is ', this.type);
    },
    getModel() {
        console.log('This model is ', this.model || 'unknown');
    }
};

// vehicle 의 프로퍼티를 프로토타입형태로 상속받으면서 타입이라는 프로퍼티 추가. 바로 객체가
export const Car = Object.create(vehicle, {
    type: {
        value: 'car',
        writable: false,
        enumerable: true,
    }
});

// 즉시실행형태로, 빈 함수객체를 만들고 그 함수객체의 프로토타입을 기선언된 객체로 연결.
// 그리고 type 받아 신규 오브젝트를 반환하는 객체 구현
export const Bike = (function () {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function F() {
    }
    // Bike 는 즉시실행되어, vehicle 을 프로토타입으로 가지는 새로운 객체를 만들어내는 함수를 반환한다.
    return function (model: string) {
        F.prototype = vehicle;
        const newObj = new F();
        newObj.type = 'bike';
        newObj.model = model;
        return newObj;
    };
})();
