function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  console.log(`${this.type} makes a sound.`);
};

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound.