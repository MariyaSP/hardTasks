const div = document.createElement('div');
const weekList = document.createElement('ul');

const weeks = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let listDay;
let day='';
const date = new Date();

for (let key in weeks) {
    listDay = document.createElement('li');
    day=weeks[key];
    if (key >= 5)
        day=day.italics();
    if (key == (date.getDay() - 1))
        day=day.bold();

    listDay.innerHTML = day;
    weekList.append(listDay);
}

div.append(weekList);
document.body.append(div)
