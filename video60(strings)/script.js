//  This is string tutorial
let a = "Hello Everyone, How are you guys"
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a.length)
console.log(a.toLowerCase())
console.log(a.toUpperCase())
console.log(a.slice(1,5))
console.log(a.slice(1))
console.log(a.replace("H","Y"))
console.log(a.replace("Hello","Ram Ram"))
console.log(a.concat(" Thank you"))
//  Stirngs are immutable as the original string cannot be changed
console.log(a.indexOf("Ever"))



let name1 = "Nikhil"
let friend ="Amit"
console.log("My name is "+name1+" And my friends name is " + friend)

//  This is templete literal used to insert the variables convinently
//  String Interpolation:-
console.log(`My name is ${name1} and my friends name is ${friend}`)

//  escape sequence character
console.log("It adds the new\n line to the text ")
console.log("It adds tab \twhere it used ")
console.log("My name is \r And my friends name is ")