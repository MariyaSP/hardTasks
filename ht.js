const lang = prompt("Выберите язык (ru/en)");

const week = {
    ru: "Пн, Вт, Ср, Чт, Пт, Сб, Вс",
    en: "Mon, Tue, Wed, Thu, Fri, Sat, Sun",
};



// ========================= 1 задача
console.log("1 способ");
if (lang === "ru")
    console.log("Пн, Вт, Ср, Чт, Пт, Сб, Вс");
else
    console.log("Mon, Tue, Wed, Thu, Fri, Sat, Sun");

console.log("2 способ");

switch (lang) {
    case "ru":
        console.log("Пн, Вт, Ср, Чт, Пт, Сб, Вс");
        break;
    case "en":
        console.log("Mon, Tue, Wed, Thu, Fri, Sat, Sun");
        break;
    default:
        console.log("что-то пошло не так");
        break;
}

console.log("3 способ");
console.log(week[lang]);

// ========================= 2 задача

const namePerson = prompt("Напишите имя");
namePerson == "Артем" ? console.log("директор") : (namePerson == "Александр" ? console.log("преподаватель") : console.log("студент"));