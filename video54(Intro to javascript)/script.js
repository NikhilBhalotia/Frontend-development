alert('your content will be reloaded')

console.log('code is running...')

var a = prompt("Enter your number : ")
console.log("your number is "+ a)

var istrue = confirm("Are you sure you want to leave this page and blast your computer")

if(istrue){
    console.log("blasting your computer")
}
else{
    console.log("Your computer is not blasting")
}

document.title = "Javascript Basics"
document.body.style.backgroundColor = "yellow"