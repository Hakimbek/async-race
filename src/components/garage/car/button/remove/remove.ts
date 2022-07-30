import Car from "../../../../../dto/Car";

export default function remove(value: Car) {
    const remove = document.createElement('button')
    remove.setAttribute('class', 'remove-button')
    remove.setAttribute('id', 'removeCar')
    remove.setAttribute('index', value.id)
    remove.innerText = 'REMOVE'

    return remove;
}