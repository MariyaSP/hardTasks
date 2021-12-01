'use strict';
const myText = "     hgjhg 666 666 979 jhgjfhgjhsdf iuyiuy yeiyiry           ";

function getEditStr(myString) {

    if (typeof myString !== "string") { return "Не строка"; }
    else {
        myString = myString.trim();
        if (myString.length > 30) {
            myString = myString.split(0, 31) + "...";
        }
        return myString;
    }
}

console.log('Результат ', getEditStr(myText));