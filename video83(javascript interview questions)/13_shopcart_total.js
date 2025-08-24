//  shopping cart totalizar

let products =["Mobile","Jacket","Watches","Speakers"]
let prices = [10,20,30,40]
let quantity = [1,2,3,4]

function calculateTotal(products,prices,quantity) {
    let result= 0
    for(i=0;i<products.length;i++){
        for(i=0;i<products.length;i++){
            result = result+(prices[i]*quantity[i])
        }
    }
    console.log("Total cost : ₹"+result);
    
}
calculateTotal(products,prices,quantity)