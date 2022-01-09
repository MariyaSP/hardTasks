
const result = document.querySelector('.result')
const selectValue = document.querySelector('select')


const data = () => {
    return fetch('db.json').then(res => res.json());
}

data().then(cars => {
    selectValue.addEventListener('change', (e) => {
        let item = e.target.value;
        render(cars, item)

    })
})
    .catch(error => {
        console.log(error);
    })

const render = (cars, item) => {

    if (item != 0) {
        result.innerHTML = `Тачка: <b>${cars[item - 1].brand} ${cars[item - 1].model}</b><br>
            Цена: <b>${cars[item - 1].price}$</b>`;
    } else {
        result.innerHTML = 'Выберите тачку'
    }
}


