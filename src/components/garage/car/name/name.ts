import Car from "../../../../dto/Car";

export default function name(value: Car) {
    const name = document.createElement('div');
    name.setAttribute('class', 'car-name')
    name.innerText = value.name;

    return name;
}