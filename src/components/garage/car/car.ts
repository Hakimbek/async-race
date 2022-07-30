import Car from "../../../dto/Car";
import remove from "./button/remove/remove";
import select from "./button/select/select";
import a from './button/start/start'
import b from './button/stop/stop'
import name from "./name/name";
import carImage from "./image/carImage";

export default function car(value: Car) {
    const carWrapper = document.createElement('div');
    carWrapper.setAttribute('class', 'car-wrapper');

    const carWrapperHeader = document.createElement('div');
    carWrapperHeader.setAttribute('class', 'car-wrapper__header');
    carWrapperHeader.appendChild(select(value));
    carWrapperHeader.appendChild(remove(value));
    carWrapperHeader.appendChild(name(value));

    const carWrapperBody = document.createElement('div')
    carWrapperBody.setAttribute('class', 'car-wrapper__body')

    const carBodyButtons = document.createElement('div');
    carBodyButtons.setAttribute('class', 'car-body__buttons')
    carBodyButtons.appendChild(a(value));
    carBodyButtons.appendChild(b(value));

    const flagWrapper = document.createElement('div');
    flagWrapper.setAttribute('class', 'flag-wrapper');

    const flag = document.createElement('img');
    flag.setAttribute('src', '../assets/image/flag.png');
    flagWrapper.appendChild(flag);

    carWrapperBody.appendChild(carBodyButtons)
    carWrapperBody.appendChild(carImage(value))
    carWrapperBody.appendChild(flagWrapper);
    carWrapper.appendChild(carWrapperHeader);
    carWrapper.appendChild(carWrapperBody);
    (document.getElementById('garage-body') as HTMLElement).appendChild(carWrapper)
}