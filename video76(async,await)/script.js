async function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(455);
            resolve()
            
        }, 3000);
    })
}

// async function getdata() {
//     let x = await fetch('https://jasonplaceholder.typicode.com/todos/1')
//     let data = await x.json()
//     console.log(data);
    
// }

// 2. Waiting approach using async and await:-

async function main(){

    console.log("Loading data")
    console.log("Another task")
    
    let data =await getdata()
    
    console.log('fetching data');
    console.log('end of the program');
}

main()

// 2. Waiting approach using arrow function:-

// data.then(()=>{

// console.log('fetching data');
// console.log('end of the program');
// })
