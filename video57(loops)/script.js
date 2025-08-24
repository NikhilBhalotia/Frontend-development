//  I am a tutorial on loops

//  1. for loop
for (i = 1; i <= 10; i++) {
    console.log(i)
}

//  2. for-in loop

let obj = {
    "name": "Nikhil",
    "company": "TCS",
    "salary": "10cr"
}

for (const key in obj) {
    {
        const value = obj[key];
        console.log(key, value)

    }
}

//  3. for-of loop

for (const element of "Nikhil") {
    console.log(element)
}

//  4. while loop

age = 5;
while (age<10) {
    console.log(age);
    age++;
}

//  5. do-while loop

num =69;
do {
    console.log(num)
    num++;
} while (num<0);