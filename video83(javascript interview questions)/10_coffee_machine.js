//Coffee Machine :-
let coffee = "Hot"
let delay = Math.random()
async function brewCoffee(CoffeeType) {
    setTimeout(() => {
        return new Promise((resolve, reject) => {
            console.log(`Your ${CoffeeType} Coffee Will be ready in some time.`);
            
        })
    }, delay*10000);
}

brewCoffee(coffee)