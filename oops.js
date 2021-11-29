class Car {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed of ${this.speed}. km/hr`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stops.`);
    }
}
class Audi extends Car {
    hide() {
        console.log(`${this.name} hides!`);
    }
    stop() {
        super.stop(); // call parent stop
        this.hide(); // and then hide
    }
}

let audi = new Audi("Audi R8");

audi.run(99);
audi.stop();
