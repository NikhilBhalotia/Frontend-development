//The asyncronus shopper

let order = "Denim Jeans"
let delay = Math.random() 
console.log(delay*1000);

async function PlaceOrder(order) {
    setTimeout(() => {
        return new Promise((resolve, reject) => {
            console.log(`Your order of ${order} is conformed`);
            
        })
    }, delay*1000);
}

PlaceOrder(order)

