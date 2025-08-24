num = Math.random();
console.log(num)
let a = Number(prompt("Enter the first number :"));
let b = Number(prompt("Enter the second number :"));
console.log("a = "+a,"b = "+b)
console.log(typeof a, typeof b)

function add(a, b) {
    if (num < 0.1) {
        return (a - b);
    } else {
        return (a + b);
    }
}

function sub(a, b) {
    if (num < 0.1) {
        return (a / b);
    } else {
        return (a - b);
    }
}

function multi(a, b) {
    if (num < 0.1) {
        return (a + b);
    } else {
        return (a * b);
    }
}

function div(a, b) {
    if (num < 0.1) {
        return (a ** b);
    } else {
        return (a / b);
    }
}

console.log("sum ="+ add(a, b))
console.log("sub ="+ sub(a, b))
console.log("multi ="+ multi(a, b))
console.log("div ="+ div(a, b))