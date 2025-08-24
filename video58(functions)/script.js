function nice(name) {
    console.log("Hey " + name + " you are Nice.")
    console.log("Hey " + name + " your tshirt is good.")
    console.log("Hey " + name + " your course is also good.")
    console.log("Hey " + name + " you are cool.")
}

nice("Harry")

function sum(a, b, c = 10) {
    console.log("a = " + a, "b = " + b, "c = " + c)
    console.log("Sum of a,b and c: " + (a + b + c));
}
sum(2, 3, 7)
sum(2, 3)
sum(2)
sum(22,34,9,sum(12,23,5))

const func1 = (x)=>{
    console.log("I am an arrow function "+x)
}

func1(233)
func1(34,func1(22))