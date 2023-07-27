export class Animal {
    constructor(type) {
        this.type = type;
    }
    getType() {
        return this.type;
    }
};

export class Dog extends Animal {
    constructor() {
        super('Dog');
    }
}