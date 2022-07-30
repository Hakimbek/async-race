import Car from "../../../../../dto/Car";

export default function b(value: Car) {
    const b = document.createElement('button')
    b.setAttribute('class', 'b-button gray')
    b.setAttribute('id', 'b')
    b.innerText = 'B';

    return b;
}