import Header from "./header";
import Add from "../components/garage/add.car/Add";
import Update from "../components/garage/edit.car/Update";
import Buttons from "../components/garage/Buttons";
import load from "../controller/loader";
import car from "../assets/image/car";

const garage = () => {
    document.addEventListener('click', (e) => {
        load('http://127.0.0.1:3000/garage', {}).then(data => {
            if (e.target.getAttribute('id') === 'garage') {
                document.getElementById('root').innerHTML = `${Header}
            <div class="garage-body" id="garage-body">
                ${Add}
                ${Update}
                ${Buttons}
                <h3>Garage (${data.length})</h3>
            </div>`;

                data.forEach(value => {
                    const div = document.createElement('div');
                    div.setAttribute('class', 'garage-body__car');

                    const id = document.createElement('div');
                    id.innerText = value.id;

                    const name = document.createElement('div');
                    name.innerText = value.name;

                    const svg = document.createElement('div');
                    svg.innerHTML = car(value.color)

                    div.appendChild(id);
                    div.appendChild(name);
                    div.appendChild(svg);
                    document.getElementById('garage-body').appendChild(div)
                })

            }
        })
    });
}

export default garage;