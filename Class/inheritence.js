class Animal {
  constructor(type) {
    this.type = type;
  }
  speak() {
    console.log(`${this.type} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super("Dog"); // parent class constructor call
    this.name = name;
  }

  speak() {
    console.log(`${this.name} barks!`);
  }
}

const tommy = new Dog("Tommy");
tommy.speak(); // Tommy barks!

