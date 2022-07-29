import Header from "../components/header/header";
import add from "../components/garage/add";
import update from "../components/garage/update";
import button from "../components/garage/button";
import load from "../controller/loader";
import car from "../assets/image/car";

const garage = () => {
    document.addEventListener('click', (e) => {
        // GET ALL CARS
        load('http://127.0.0.1:3000/garage', {method: 'GET'}).then(data => {
            if (e.target.getAttribute('id') === 'garage') {
                document.getElementById('root').innerHTML = `${Header}
            <div class="garage-body" id="garage-body">
                ${add}
                ${update}
                ${button}
                <h3 class="cars-amount">Garage ( ${data.length} )</h3>
            </div>`;

                data.forEach((value) => {
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

                    const svg = document.createElement('div');
                    svg.innerHTML = car(value.color)

                    carWrapper.appendChild(carWrapperHeader);
                    carWrapper.appendChild(svg);

                    document.getElementById('garage-body').appendChild(carWrapper)
                })

            }

            // ADD CAR
            if (e.target.getAttribute('id') === 'addCar') {
                const data = {
                    name: document.getElementById('add-name').value,
                    color: document.getElementById('add-color').value
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
            if (e.target.getAttribute('id') === 'removeCar') {
                load(`http://127.0.0.1:3000/garage/${e.target.getAttribute('index')}`, {
                    method: 'DELETE'
                })

                window.location.reload();
            }

            // EDIT CAR
            if (e.target.getAttribute('id') === 'selectCar') {
                const select = e.target;
                const id = select.getAttribute('index')
                const name = select.getAttribute('name')
                const color = select.getAttribute('color')
                document.getElementById('editName').disabled = false;
                document.getElementById('editName').value = name;
                document.getElementById('editColor').value = color;
                document.getElementById('editButton').setAttribute('index', id);
            }

            if (e.target.getAttribute('id') === 'editButton') {
                if (!document.getElementById('editName').disabled) {
                    let data = {
                        name: document.getElementById('editName').value,
                        color: document.getElementById('editColor').value
                    }
                    console.log(data)
                    load(`http://127.0.0.1:3000/garage/${e.target.getAttribute('index')}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })

                    window.location.reload();
                }
            }
        })
    });
}

export default garage;