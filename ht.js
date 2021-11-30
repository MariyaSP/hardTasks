"use strict"
const lang = prompt("Выберите язык (ru/en)");

const week = new Map([['ru', 'Пн, Вт, Ср, Чт, Пт, Сб, Вс'],
['en', 'Mon, Tue, Wed, Thu, Fri, Sat, Sun']]);
console.log(week.get(lang));

if (lang === "ru")
    console.log(week.get('ru'));
else
    console.log(week.get('en'));

switch (lang) {
    case "ru":
        console.log(week.get('ru'));
        break;
    case "en":
        console.log(week.get('en'));
        break;
    default:
        console.log("что-то пошло не так");
        break;
}

const namePerson = prompt("Напишите имя");
namePerson == "Артем" ? console.log("директор") : (namePerson == "Александр" ? console.log("преподаватель") : console.log("студент"));