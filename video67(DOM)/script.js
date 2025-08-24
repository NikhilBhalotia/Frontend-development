console.log("Hello world")
console.log(document.body)
console.log(document.body.childNodes)
console.log(document.body.childNodes[0])
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes)
console.log(document.body.childNodes[1].childNodes[0].childNodes)

let cont = document.body.childNodes[1]
console.log(cont.firstChild)
document.body.childNodes[1].childNodes[1].style.color = "green"
document.body.childNodes[1].childNodes[1].style.background = "pink"
console.log(cont.lastChild.parentElement)
console.log(cont.parentElement)
// console.log(cont.childern)
// console.log(cont.childern[1].nextElementSibling)

console.log(document.body.childNodes[3])
console.log(document.body.childNodes[3].rows)
console.log(document.body.childNodes[3].columns)

