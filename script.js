const weekList = document.querySelector('ul');
const weeks = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let listDay;
const date = new Date();

for (let key in weeks) {
    listDay = document.createElement('li');
    if (key >= 5)
        listDay.classList = "weekend";
    if (key == (date.getDay() - 1))
        listDay.classList.add('today');

    listDay.innerHTML = weeks[key];
    weekList.append(listDay);
}

