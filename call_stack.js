function first() {
  second();
  console.log("First Done");
}

function second() {
  console.log("Second Done");
}

first();
console.log("Global Done");
