let arr = [12,4,3,22,7]
// let newArr = []
// for(i=0;i<arr.length;i++){
//     let value = arr[i]
//     newArr.push(value**2)

// }
// console.log(newArr)

let newArr = arr.map((e)=>{
    return e**2
})
console.log(newArr)

//  filter function
const greaterthanseven =(value)=>{
    if(value>7){
        return true
    }
    return false

}

console.log(arr.filter(greaterthanseven))

//  reduce fuction

let arr1 = [1,2,3,4,5,6]
const red =(a,b)=>{
    return a*b

}
console.log(arr1.reduce(red))

let myname = "Nikhil"
console.log(Array.from(myname))