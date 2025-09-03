function first() {
  second();
  console.log("First Done");
}

function second() {
  third()
  console.log("Second Done");
}

function third() {
  console.log("Third Done");
}

first();
console.log("Global Done");
