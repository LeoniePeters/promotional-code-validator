class Shape {
    constructor(id, x, y) {
        this.id = id;
        this.setLocation(x, y);
    }

    setLocation(x, y) {
        this.x = x;
        this.y = y;
    };

    getLocation() {
        return {
            x: this.x,
            y: this.y
        }
    }

    toString() {
        return `Shape(${this.id})`;
    }
}

class Circle extends Shape {
    constructor(id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
    toString() {
        return `Circle > ${super.toString}`;
    }
}