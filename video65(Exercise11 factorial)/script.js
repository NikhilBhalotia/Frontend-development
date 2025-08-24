//  1. factorial using reduce function

let num = [1,2,3,4,5]

const red = ((a,b) =>{
    return a*b
})
console.log(num.reduce(red))

//  2. factorial using for loop
let fac = 1
let num1 = 5
for(i=num1;i>=1;i--){

fac = fac*i
    

}
console.log(fac)
