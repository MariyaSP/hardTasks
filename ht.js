let num = 26621;

let arr = Array.from(num.toString(), Number); // распилили числона массив цифр

let result = arr.reduce((acc, mult) => acc * mult); // проход по массиву с вычислением значения

console.log("Результат " + result);

console.log("Возведение в степень " + result**3);

console.log("Первые две цифры результата " + String(result**3).slice(0, 2)); // перевели в строку, вычленили подстроку из нужного количества символов