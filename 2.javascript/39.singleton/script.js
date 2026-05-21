let instance;

class Counter {
    constructor() {
        if(instance) {
            throw new Error("하나의 인스턴스만 생성할 수 있습니다.")
        }
        this.counter = 0;
        instance = this;
    }

    getCount() {
        return this.counter;
    }

    increment() {
        return ++this.counter;
    }

    decrement() {
        return --this.counter;
    }
}

const singleA = new Counter();
singleA.increment()
singleA.increment()

console.log(singleA.getCount());

const singleB = new Counter();