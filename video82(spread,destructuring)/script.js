async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

// Imediatly Invoke Function Expression(IIFE):-
// (async function main() {
// let a = await sleep()
// console.log(a);
// })()

function sum(a,b,c) {
    return a+b+c
}

(async function main() {
    // destructuring in array :-

    // let [x, y, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8]
    // console.log(x, y, rest);


    // destructuring in objects :-

    // let obj = {
    //     a: 1,
    //     b: 2,
    //     c: 3,
    //     d: 4
    // }
    // let { a, b } = obj
    // console.log(a, b);

    //  spread function:-
    let arr =[1,2,3]
    // 1. This is the traditional way to sum
    console.log(sum(arr[0],arr[1],arr[2]));
    // 2. now using spread we can do it better
    console.log(sum(...arr));
    // It is also used to create an object
    obj = {...arr}
    console.log(obj);

    // Quick Quiz
    let a="the"
    let b ="no"
    let c ={a,b}
    console.log(c);

    //  Hoisting:-
    
    // console.log(a1); // this will throw an error because a1 is declared after use
    // let a1=10

    console.log(a1); //this will not throw any error because var pull the declaration statement at the top of the block
    var a1 = 10
    
    
    
    

})()