// The password validator

let password = "Nikhil123"


if(password.length >=8 && hascaplet(password) && hassmalllet(password) && hasnum(password)){
    console.log("The entered password is Correct");
    
}
else{
    console.log("The entered password is not Correct");
    
}

function hascaplet(pw) {
    return /[A-Z]/.test(password)

}
function hassmalllet(pw) {
    return /[a-z]/.test(password)

}
function hasnum(pw) {
    return /\d/.test(password)

}
// console.log(hascaplet(password));
// console.log(hassmalllet(password));
// console.log(hasnum(password));
