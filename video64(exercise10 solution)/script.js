
let first,second,third

// generating first name
let rand1 = Math.random()
if (rand1<0.33) {
    first = "Crazy"
}
else if(rand1<0.66 && rand1>0.33){
    first ="Amazing"
}
else{
    first = "Fire"
}

//  generatiing second name
let rand2 = Math.random()
if (rand2<0.33) {
    second = "Engine"
}
else if(rand2<0.66 && rand2>0.33){
    second ="Foods"
}
else{
    second = "Garments"
}

//  generatiing third name
let rand = Math.random()
if (rand<0.33) {
    third = "Bros"
}
else if(rand<0.66 && rand>0.33){
    third ="Limited"
}
else{
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)