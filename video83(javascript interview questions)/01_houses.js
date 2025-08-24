// Assign the houses

let students = ["subh","shivam","narendra","bhupendrajogi","Ram","taran","udham","piyush","Nikhil","Lokendra"]

let Vivekanand =[]
let Dayanand =[]
let Hansraj =[]
let Shradanand =[]
for (const student of students) {
    if(student.length<6){
        Vivekanand.push(student)
    }
    else if(student.length<8){
        Dayanand.push(student)
    }
    else if(student.length<12){
        Hansraj.push(student)
    }
    else{
        Shradanand.push(student)
    }
}

console.log("Vivekanand = "+Vivekanand);
console.log("Dayanand = "+Dayanand);
console.log("Hansraj = "+Hansraj);
console.log("Shradanand = "+Shradanand);







