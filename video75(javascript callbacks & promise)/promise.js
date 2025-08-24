// console.log('promise');

let prom1 = new Promise((resolve, reject) => {
    let ran = Math.random()
    if (ran>0.5) {
        reject("No random number is supported1")
    } else {
        
        setTimeout(() => {
            console.log('yes I am done1');
            resolve("harry1")
            
        }, 3000);
    }
})
let prom2 = new Promise((resolve, reject) => {
    let ran = Math.random()
    if (ran>0.5) {
        reject("No random number is supported2")
    } else {
        
        setTimeout(() => {
            console.log('yes I am done2');
            resolve("harry2")
            
        }, 3000);
    }
})

// let p3 = Promise.all([prom1, prom2])
// let p3 = Promise.allSettled([prom1, prom2])
// let p3 = Promise.race([prom1, prom2])
// let p3 = Promise.any([prom1, prom2])
// let p3 = Promise.resolve([prom1, prom2])
let p3 = Promise.reject([prom1, prom2])
p3.then((a) => {
    console.log(a);

}).catch((err) => {
    console.log(err);

})

// prom1.then((a) => {
//     console.log(a);

// })
// prom1.catch((a) => {
//     console.log(a);

// })