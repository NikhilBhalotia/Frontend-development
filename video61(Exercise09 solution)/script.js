num = Math.random();
console.log(num)
let a = (prompt("Enter the first number :"));
let c = (prompt("Enter the operator :"));
let b = (prompt("Enter the second number :"));

console.log("a = " + a, "b = " + b, "c = " + c)
console.log(typeof a, typeof b, typeof c)

let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**",
}

if (num > 0.1) {
    // Perform Correct Operation
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`)
} else {
    // Perform Wrong Operation
    c = obj[c]
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
console.log(obj[c])