function factorial(Number) {
    if (Number == 0 || Number == 1) {
        return 1
    }
    else {

        arr = Array.from(Array(Number+1).keys())
        let c = arr.slice(1,).reduce((a, b) => a * b)
        return c
    }
}
console.log(factorial(6))

function facfor(number) {
    let fac = 1
    if (number == 0 || number == 1) {
        return 1
    }
    else {

        for (let index = 1; index <= number; index++) {
            fac = fac * index;

        }
    }
    return fac

}
console.log(facfor(6))