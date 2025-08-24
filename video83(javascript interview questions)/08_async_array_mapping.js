//  Que-08 async array multiplication

let arr = [1, 2, 3, 4, 5]
async function double_num(arr) {

    const delay = 500
    arr.forEach((element, i) => {
        setTimeout(() => {
            return new Promise((resolve, reject) => {

                console.log(element);


            })
        }, delay * i);
    })
}


double_num(arr)

