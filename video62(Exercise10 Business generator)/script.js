/*
Create a business name generator by combining lists of adjectives, shop name and another word

Adjectives:
1.Crazy
2.Amazing
3.Fire

Shop name:
1.Engine
2.Foods
3.Garments

Another Word:
1.Bros
2.Limited
3.Hub

*/


let firstname = {
    a:"Crazy",
    b:"Amazing",
    c:"Fire"
    
}

// let naam = ["Crazy", "Amazing", "Fire"]
// let random = Math.floor(Math.random()*naam.length)
// console.log(random, naam[random])

let rad1 = Math.floor(Math.random() * firstname.length)
console.log(rad1, firstname[rad1])




