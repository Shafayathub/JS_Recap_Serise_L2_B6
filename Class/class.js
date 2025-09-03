class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}

const p1 = new Person("Shafayat");
p1.greet();
// Output: Hello, I am Shafayat


//JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.





















// Behind the scenes (prototype-based)
function PersonProto(name) {
  this.name = name;
}

PersonProto.prototype.greet = function() {
  console.log(`Hello, I am ${this.name}`);
};

const p2 = new PersonProto("Shafayat");
p2.greet();
// Output: Hello, I am Shafayat
