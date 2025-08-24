let a = prompt("Enter first number : ")
let b = prompt("Enter second number : ")

if(isNaN(a)||isNaN(b)){
    throw SyntaxError("Sorry, you have to enter a Number")
}

let sum = Number(a) + parseInt(b)

function main(){

    try {
        console.log("The sum is  = "+sum*x);
        return true
        
    } catch (error) {
        console.log("Error aa gya yrr");
        return false
        // alert("error_name = "+error.name)
        // alert("error_message = "+error.message)
        // alert("error_stack = "+error.stack)
        
    }
    
    // finally{
        console.log("Files are being closed");
        
    // }
    
}

main()