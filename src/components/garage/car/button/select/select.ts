import Car from "../../../../../dto/Car";

export default function select(value: Car) {
    const select = document.createElement('button')
    select.setAttribute('class', 'select-button')
    select.setAttribute('id', 'selectCar')
    select.setAttribute('index', value.id)
    select.setAttribute('name', value.name)
    select.setAttribute('color', value.color)
    select.innerText = 'SELECT'

    return select;
}