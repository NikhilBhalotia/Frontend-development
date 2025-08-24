let a = [2, 66, 8, 88]

// for(let i=0;i<a.length;i++){
//     result = a[i]
//     console.log(result)
// }

// a.forEach((value,index,array) => {
//     console.log(value)
//     console.log(index)
//     console.log(array)

// });

let obj ={
    a:1,
    b:2,
    c:3
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        console.log(value)
        
    }
}

let arr = ["hello",4,6,8]
for (const value of arr) {
    console.log(value)
}