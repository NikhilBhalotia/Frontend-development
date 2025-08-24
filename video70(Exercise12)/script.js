let rand = Math.random()
console.log(rand)
document.body.style.backgroundColor = "pink"
// document.body.getElementsByClassName(".container")

document.body.querySelectorAll(".box").forEach(e=>{e.style.background = "green"})
