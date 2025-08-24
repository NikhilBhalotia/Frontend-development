// Double the elements of an array

let arr = [2, 4, 6, 6, 8, 10,NaN];
// console.log(arr.length);

function double_arr(arr) {


    for (let j = 0; j < arr.length;) {
        for (let i = 1; i <= arr.length; i++) {

            if (arr[i] == arr[j]) {
                arr.pop
                (arr[i])
            }
            else {
                console.log(arr[j] * 2);
            }
            j++

        }
        

    }
    // console.log(arr[arr.length]);
    

}
double_arr(arr)