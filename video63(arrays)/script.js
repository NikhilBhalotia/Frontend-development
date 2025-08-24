let array = [1,2,3,"nikhil"]

console.log(array)
console.log(array.length, typeof array)
console.log(array[0])
console.log(array[3])

array[0] = "jat"
console.log(array)

// console.log(array.toString())
// console.log(array.join(" and "))


// jo shift h vo pop ka bhai hota h ore unshift push ka bhai hota h
array.pop()
console.log("pop = " ,array)

array.push(69)
console.log("push:69 = " ,array)

array.shift()
console.log("shift = " ,array)

array.unshift("yello")
console.log("unshift:yello =" ,array)

delete(array[2])
console.log("delete at index 2 =" ,array)
console.log(array[2])

let a =[1,2,3,4]
let b =[5,6,7,8]
let c =[9,10,11,12]

console.log(a)
//  concat does not change the existing array
console.log(a.concat(b))
console.log(a.concat(b,c))

//  sort modifies original array 
console.log(array.sort())

//  splice changes the original array
// console.log(a.splice(1,2))
console.log(a.splice(1,2,22,33))
console.log(a)

//  slice does not change the original array
console.log(b.slice(1))
console.log(b.slice(1,3))
console.log(b)




