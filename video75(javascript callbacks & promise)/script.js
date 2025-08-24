console.log("Nikhil is a hacker")
console.log("Mia is a hacker")

setTimeout(() => {
    console.log("I am Timeout")
}, 2000);

console.log("End of the code...")

const callback = (arg)=>{
    console.log(arg)
}

const loadscript = (src,callback) =>{
    let sc = document.createElement("script")
    sc.src=src
    sc.onload = callback("Harry")
    document.head.append(sc)
}
loadscript("",callback)



