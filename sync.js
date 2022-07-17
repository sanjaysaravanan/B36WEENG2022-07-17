console.log("Line 1");

setTimeout(function timeout() {
    console.log("Line 4");
}, 3000);

setTimeout(function timer() {
    console.log("Line 8");
}, 3000);

console.log("Line 11");