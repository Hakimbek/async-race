import load from "../../../controller/loader";
import Param from "../../../controller/param";
import header from "../../../components/header/header";
import add from "../../../components/garage/add/add";
import update from "../../../components/garage/update/update";
import button from "../../../components/garage/button/button";
import winner from "../../../components/garage/winner/winner";
import Car from "../../../controller/Car";
import car from "../../../assets/image/car";

export default function getAllCars(element: HTMLElement) {
    let page = localStorage.getItem('garagePage');

    load(`http://127.0.0.1:3000/garage?_page=${page}&_limit=7`, new Param('GET')).then(data => {
        load(`http://127.0.0.1:3000/garage`, new Param('GET'))
            .then(data2 => {
                (document.getElementById('root') as HTMLElement).innerHTML = `${header}
                    <div class="garage-body" id="garage-body">
                        ${add}
                        ${update}
                        ${button}
                        ${winner}
                        <h3 class="cars-amount">Garage ( ${data2.length} )</h3>
                        <p class="current-page">Page # ${page}</p>
                    </div>`;

                data.forEach((value: Car) => {
                    const carWrapper = document.createElement('div');
                    carWrapper.setAttribute('class', 'car-wrapper');

                    const carWrapperHeader = document.createElement('div');
                    carWrapperHeader.setAttribute('class', 'car-wrapper__header');

                    const select = document.createElement('button')
                    select.setAttribute('class', 'select-button')
                    select.setAttribute('id', 'selectCar')
                    select.setAttribute('index', value.id)
                    select.setAttribute('name', value.name)
                    select.setAttribute('color', value.color)
                    select.innerText = 'SELECT'

                    const remove = document.createElement('button')
                    remove.setAttribute('class', 'remove-button')
                    remove.setAttribute('id', 'removeCar')
                    remove.setAttribute('index', value.id)
                    remove.innerText = 'REMOVE'

                    const name = document.createElement('div');
                    name.setAttribute('class', 'car-name')
                    name.innerText = value.name;

                    carWrapperHeader.appendChild(select);
                    carWrapperHeader.appendChild(remove);
                    carWrapperHeader.appendChild(name);

                    const carWrapperBody = document.createElement('div')
                    carWrapperBody.setAttribute('class', 'car-wrapper__body')

                    const carBodyButtons = document.createElement('div');
                    carBodyButtons.setAttribute('class', 'car-body__buttons')

                    const a = document.createElement('button')
                    a.setAttribute('class', 'a-button')
                    a.setAttribute('id', 'a')
                    a.setAttribute('index', value.id)
                    a.innerText = 'A';

                    const b = document.createElement('button')
                    b.setAttribute('class', 'b-button gray')
                    b.setAttribute('id', 'b')
                    b.innerText = 'B';

                    carBodyButtons.appendChild(a);
                    carBodyButtons.appendChild(b);

                    const carImage = document.createElement('div');
                    carImage.setAttribute('class', 'car-image')
                    carImage.setAttribute('index', value.id)
                    carImage.setAttribute('name', value.name)
                    carImage.innerHTML = car(value.color)

                    const flagWrapper = document.createElement('div');
                    flagWrapper.setAttribute('class', 'flag-wrapper');

                    const flag = document.createElement('img');
                    flag.setAttribute('src', '../assets/image/flag.png');
                    flagWrapper.appendChild(flag);

                    carWrapperBody.appendChild(carBodyButtons)
                    carWrapperBody.appendChild(carImage)
                    carWrapperBody.appendChild(flagWrapper);

                    carWrapper.appendChild(carWrapperHeader);
                    carWrapper.appendChild(carWrapperBody);

                    (document.getElementById('garage-body') as HTMLElement).appendChild(carWrapper)
                })

                const pagination = document.createElement('div')
                pagination.setAttribute('class', 'pagination')

                const prev = document.createElement('button')
                prev.setAttribute('class', 'prev')
                prev.setAttribute('id', 'prev')
                prev.innerText = 'PREV'

                const next = document.createElement('button')
                next.setAttribute('class', 'next')
                next.setAttribute('id', 'next')
                next.innerText = 'NEXT'

                pagination.appendChild(prev);
                pagination.appendChild(next);
                (document.getElementById('garage-body') as HTMLElement).appendChild(pagination)
            })
    })
}