import car from "../../assets/image/car";
import Winners from "../../dto/Winners";
import Car from "../../dto/Car";

export default function winners(value: Winners, res: Car) {
    const tableBody = document.getElementById('winners-table__body') as HTMLElement

    const tr = document.createElement('tr')

    const id = document.createElement('td')
    id.setAttribute('class', 'table-data')
    id.innerText = value.id + '';

    const time = document.createElement('td')
    time.innerText = value.time + ''
    time.setAttribute('class', 'table-data')

    const wins = document.createElement('td')
    wins.innerText = value.wins + ''
    wins.setAttribute('class', 'table-data')

    const name = document.createElement('td')

    name.setAttribute('class', 'table-data')
    name.innerText = res.name

    const carImage = document.createElement('td')
    carImage.innerHTML = car(res.color)
    carImage.setAttribute('class', 'table-data')

    tr.appendChild(id)
    tr.appendChild(carImage)
    tr.appendChild(name)
    tr.appendChild(wins)
    tr.appendChild(time)

    tableBody.appendChild(tr)
}