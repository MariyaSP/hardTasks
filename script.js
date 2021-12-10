'use strict';
let now = new Date();
let k = new Date();
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
}
const p = document.createElement('p');

const str = 'Сегодня ' + now.toLocaleString('ru', options)[0].toUpperCase() + 
now.toLocaleString('ru', options).substring(1, (now.toLocaleString('ru', options).length - 2)) + 
'года ' + now.toLocaleString('ru', { hour: 'numeric' }) + ' ' 
+ hourText(now.toLocaleString('ru', { hour: 'numeric' }))+' ' +now.toLocaleString('ru', { minute: 'numeric' })+
' минут '+now.toLocaleString('ru', { second: 'numeric' })+' секунд';

console.log(str);

function hourText(hour) {
    if (hour == 1 || hour == 21) return 'час';
    else if ((hour > 1 && hour <= 4) || (hour > 21 && hour <= 24)) return "часа";
    else return "часов";
}

function format2(date) {


    return  zero(date.getDate()) + ":" + zero(date.getMonth()) + ":" + date.getFullYear() + " - " + date.toLocaleTimeString();

}

function zero(num) {
    if (num < 10)
        return '0' + num;
    else return num;
}

setInterval(function () {

    now = new Date();
    p.textContent = format2(now);
    document.body.append(p);
}, 1000);

console.log(format2(k));

