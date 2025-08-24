// vowel counter:-

let loc = "Alwar"

function countvowel() {

    let count1 = 0
    for (i = 0; i < loc.length; i++) {
        if (loc[i] == "a" || loc[i] == "e" || loc[i] == "i" || loc[i] == "o" || loc[i] == "u" || loc[i] == "A" || loc[i] == "E" || loc[i] == "I" || loc[i] == "O" || loc[i] == "U") {

            count1 = count1 + 1
        }
    }
    console.log(count1);

}

countvowel()