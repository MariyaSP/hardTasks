'use strict';
let arr = [];

for (let i = 0; i < 7; i++) {
    arr[i] = prompt("Введите " + (i + 1) + " элемент массива");

    if (arr[i].slice(0, 1) === "2" || arr[i].slice(0, 1) === "4")
        console.log(arr[i]);
}
console.log(arr);

console.log("Простые числа");
for (let i = 2; i <= 100; i++) {
    let flag = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0)
            flag = false;
    }

    if (flag)
        console.log(i);
}