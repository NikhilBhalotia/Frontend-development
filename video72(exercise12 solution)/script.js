console.log("script.js initializing")
let boxes = document.getElementsByClassName("box")
console.log(boxes)

function getRandomColor() {
    let val1 = Math.ceil(0+255*Math.random())
    let val2 = Math.ceil(0+255*Math.random())
    let val3 = Math.ceil(0+255*Math.random())
    return `rgb(${val1},${val2},${val3})`
}

Array.from(boxes).forEach(e=>{
    e.style.background = getRandomColor()
})
