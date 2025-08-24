// Sum of array

let arr1 = [2,4,5,6,8,10,11,12]
let sum =0
function sumofarray(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        // console.log(element);
        sum = sum + element   
    }
    console.log("sum = "+sum);
    
}
sumofarray(arr1)

