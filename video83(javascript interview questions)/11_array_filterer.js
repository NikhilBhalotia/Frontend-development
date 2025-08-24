// The Array filterer

let products = ["Mobile1","Mobile2","Watches","Speakers","Shoes","T-shirts","Bags","Bottle","Lowers","Jeans","Blazer","Coat","Sweat shirt","Protein","Trimmer","Mobile samsung"]
let result = []
let item = "Watch"
function filterProducts(products) {
    for(let i=0;i<products.length;i++){

        if(products[i].startsWith(`${item}`)){
            result = result+" "+products[i]
        }

    }
    console.log(result);
    
    
    
}
filterProducts(products)