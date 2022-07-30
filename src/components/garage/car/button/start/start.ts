import Car from "../../../../../dto/Car";

export default function a(value: Car) {
    const a = document.createElement('button')
    a.setAttribute('class', 'a-button')
    a.setAttribute('id', 'a')
    a.setAttribute('index', value.id)
    a.innerText = 'A';

    return a;
}