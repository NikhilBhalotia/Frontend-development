let rand1 = Math.ceil(0 + Math.random() * 7000)
console.log(rand1);

// function dot(){
//     setInterval(() => {
//         console.log(".");
        
//     }, 500);
// }

function statement() {
    let rand2 = Math.ceil(1 + Math.random() * 5)

    if (rand2 == 1) {
        console.log("Initializing Hacking...");

    }
    else if (rand2 == 2) {
        console.log("Reading your Files...");

    }
    else if (rand2 == 3) {
        console.log("Password files Detected...");

    }
    else if (rand2 == 4) {
        console.log("Sending all passwords and personal files to server...");

    }
    else if (rand2 == 5) {
        console.log("Cleaning Up...");

    }
}

let ex = document.body.innerHTML
function hack() {
    setInterval(() => {
        statement()
        
        
    }, rand1);
}
hack()
