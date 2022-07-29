import Param from "../controller/param";
import Header from "../components/header/header";
import add from "../components/garage/add";
import update from "../components/garage/update";
import button from "../components/garage/button";
import load from "../controller/loader";
import car from "../assets/image/car";
import Car from "../controller/Car";

const garage = () => {
    document.addEventListener('click', (e) => {
        // GET ALL CARS
        load('http://127.0.0.1:3000/garage', new Param('GET')).then(data => {
            if ((e.target as HTMLElement).getAttribute('id') === 'garage') {
                (document.getElementById('root') as HTMLElement).innerHTML = `${Header}
            <div class="garage-body" id="garage-body">
                ${add}
                ${update}
                ${button}
                <h3 class="cars-amount">Garage ( ${data.length} )</h3>
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

            }

            // ADD CAR
            if ((e.target as HTMLElement).getAttribute('id') === 'addCar') {
                const data = {
                    name: (document.getElementById('add-name') as HTMLInputElement).value,
                    color: (document.getElementById('add-color') as HTMLInputElement).value
                }

                if (data.name !== '') {
                    load('http://127.0.0.1:3000/garage', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    }).then(res => console.log(res)).catch(err => console.log(err))

                    window.location.reload();
                }
            }

            // DELETE CAR
            if ((e.target as HTMLElement).getAttribute('id') === 'removeCar') {
                load(`http://127.0.0.1:3000/garage/${(e.target as HTMLElement).getAttribute('index')}`, {
                    method: 'DELETE'
                })

                window.location.reload();
            }

            // EDIT CAR
            if ((e.target as HTMLElement).getAttribute('id') === 'selectCar') {
                const select = e.target as HTMLElement;
                const id = select.getAttribute('index') as string;
                const name = select.getAttribute('name') as string;
                const color = select.getAttribute('color') as string;
                (document.getElementById('editName') as HTMLInputElement).disabled = false;
                (document.getElementById('editName') as HTMLInputElement).value = name;
                (document.getElementById('editColor') as HTMLInputElement).value = color;
                (document.getElementById('editButton') as HTMLButtonElement).setAttribute('index', id);
            }

            if ((e.target as HTMLElement).getAttribute('id') === 'editButton') {
                if (!(document.getElementById('editName') as HTMLInputElement).disabled) {
                    let data = {
                        name: (document.getElementById('editName') as HTMLInputElement).value,
                        color: (document.getElementById('editColor') as HTMLInputElement).value
                    }
                    console.log(data)
                    load(`http://127.0.0.1:3000/garage/${(e.target as HTMLElement).getAttribute('index')}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })

                    window.location.reload();
                }
            }

            function race(endX: number, duration: number, element: HTMLElement) {
                let currentX = element.offsetLeft;
                const frameCount = duration / 1000 * 60;
                const dx = (endX - currentX) / frameCount;

                const intervalId = setInterval(() => {
                    currentX += dx;

                    if (currentX > endX) {
                        clearInterval(intervalId);
                    }

                    element.style.transform = `translateX(${currentX}px)`;
                }, 16)

                return intervalId;
            }

            // RACE
            if ((e.target as HTMLElement).getAttribute('id') === 'race') {
                // const raceButton = document.getElementById('race') as HTMLElement;
                // raceButton.setAttribute('disabled', 'true');

                const cars = document.getElementsByClassName('car-image')
                for (let i = 0; i < cars.length; i++) {
                    const car = cars[i] as HTMLElement;
                    const id = car.getAttribute('index')
                    load(`http://127.0.0.1:3000/engine?id=${id}&status=started`, new Param('PATCH'))
                        .then(response => {
                            const speed = response.velocity / 10

                            const width = window.innerWidth - car.offsetLeft - 150
                            // const duration = parseInt(Math.random() * 10 + '');
                            const intervalId = race(width, speed * 1000, car);

                            load(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, new Param('PATCH'))
                                .catch(() => {
                                    clearInterval(intervalId);
                                })
                        })
                }
            }

            // RESET
            if ((e.target as HTMLElement).getAttribute('id') === 'reset') {
                const cars = document.getElementsByClassName('car-image')
                for (let i = 0; i < cars.length; i++) {
                    const car = cars[i] as HTMLElement;
                    car.style.transform = `translateX(0px)`;
                }
            }

            if ((e.target as HTMLElement).getAttribute('id') === 'a') {
                const a = e.target as HTMLElement
                const b = a.nextSibling as HTMLElement
                a.setAttribute('class', 'a-button gray')
                a.setAttribute('disabled', 'true')
                b.setAttribute('class', 'b-button')

                const cars = document.getElementsByClassName('car-image')
                for (let i = 0; i < cars.length; i++) {
                    if (cars[i].getAttribute('index') === a.getAttribute('index')) {
                        const car = cars[i] as HTMLElement;
                        const width = window.innerWidth - car.offsetLeft - 150
                        const duration = parseInt(Math.random() * 10 + '');
                        race(width, duration * 1000, car);
                        break;
                    }
                }
            }

            if ((e.target as HTMLElement).getAttribute('id') === 'b') {
                const b = e.target as HTMLElement;
                const a = b.previousSibling as HTMLElement;
                b.setAttribute('class', 'b-button gray')
                a.setAttribute('class', 'a-button')

                const cars = document.getElementsByClassName('car-image')
                for (let i = 0; i < cars.length; i++) {
                    if (cars[i].getAttribute('index') === a.getAttribute('index')) {
                        const car = cars[i] as HTMLElement;
                        car.style.transform = `translateX(0px)`;
                        break;
                    }
                }
            }
        })
    });
}

export default garage;