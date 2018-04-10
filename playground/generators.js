function *sample(){
  yield "first";
  yield "second";
  yield "last";
}

let it = sample();

var result = it.next();
console.log("the", result.value, "iteration");
// => “the first iteration”

result = it.next();
console.log("the", result.value, "iteration");
// => “the second iteration”

result = it.next();
console.log("the", result.value, "iteration");
// => “the last iteration”

/**
 * But do you need to learn generators?

No.

Make no mistake. You absolutely need generators.

Without them, async functions wouldn’t work. But you do not need to learn how to use them, directly.
 */
