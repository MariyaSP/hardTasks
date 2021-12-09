'use strict';
let now = new Date();
let myDay = '';
let myMonth;
let str = '';
const p = document.createElement('p');

function format1(date) {
     switch (date.getDay()) {
        case 1:
            myDay = 'Понедельник';
            break;
        case 2:
            myDay = 'Вторник';
            break;
        case 3:
            myDay = 'Среда';
            break;
        case 4:
            myDay = 'Четверг';
            break;
        case 5:
            myDay = 'Пятница';
            break;
        case 6:
            myDay = 'Суббота';
            break;
        case 7:
            myDay = 'Воскресенье';
            break;
    }

    switch (date.getMonth()) {
        case 0:
            myMonth = 'Января'; break;
        case 1:
            myMonth = 'Февраля'; break;
        case 2:
            myMonth = 'Марта'; break;
        case 3:
            myMonth = 'Апреля'; break;
        case 4:
            myMonth = 'Мая'; break;
        case 5:
            myMonth = 'Июня'; break;
        case 6:
            myMonth = 'Июля'; break;
        case 7:
            myMonth = 'Августа'; break;
        case 8:
            myMonth = 'Сентября'; break;
        case 9:
            myMonth = 'Октября'; break;
        case 10:
            myMonth = 'Ноября'; break;
        case 11:
            myMonth = 'Декабря'; break;
    }

    return str = 'Сегодня ' + myDay + ", " + date.getDate() + ' ' + myMonth + ' ' + date.getFullYear() + ' года, ' + date.getHours() + ' ' + hourText(date.getHours()) + ' ' + date.getMinutes() + ' минут ' + date.getSeconds() + ' секунд';
    ;
}

function hourText(hour) {
    if (hour == 1 || hour == 21) return 'час';
    else if ((hour > 1 && hour <= 4) || (hour > 21 && hour <= 24)) return "часа";
    else return "часов";
}

function format2(date) {


    return str = zero(date.getDate()) + ":" + zero(date.getMonth()) + ":" + date.getFullYear() + " - " + date.toLocaleTimeString();

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


console.log(format1(now));
console.log(format2(now));

