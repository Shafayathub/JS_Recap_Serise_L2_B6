function outer() {
  let outerVar = "I am outer";
  
  function inner() {
    console.log(outerVar); // Works fine
  }
  inner();
}
outer();
// outerVar is not accessible outside the outer function
console.log(outerVar); // Error: not defined
// inner is not accessible outside the outer function
inner(); // Error: not defined
// inner is accessible inside the outer function


