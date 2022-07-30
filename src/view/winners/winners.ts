import Header from "../../components/header/header";
import load from "../../controller/loader";
import Param from "../../controller/param";
import Winners from "../../controller/Winners";
import car from "../../assets/image/car";

const winners = () => {
    document.addEventListener('click', (e) => {
        let targetElement = e.target as HTMLElement;

        load('http://127.0.0.1:3000/winners', new Param('GET')).then((data) => {
            if (targetElement.getAttribute('id') === 'winners') {
                (document.getElementById('root') as HTMLElement).innerHTML = `${Header}
                <div class="winners-body" id="winners-body">
                    <h3 class="winners-amount">Winners ( ${data.length} )</h3>
                    <table>
                        <thead class="winners-table__head">
                            <tr>
                                <th class="winners-table__title">Car ID</th>
                                <th class="winners-table__title">Car</th>
                                <th class="winners-table__title">Name</th>
                                <th class="winners-table__title">Wins</th>
                                <th class="winners-table__title">Best time (seconds)</th>
                            </tr>
                        </thead>
                        <tbody id="winners-table__body">
                        
                        </tbody>
                    </table>
                 </div>`

                data.forEach((value: Winners) => {
                    load(`http://127.0.0.1:3000/garage/${value.id}`, new Param('GET'))
                        .then(res => {
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
                            console.log(res)
                            carImage.innerHTML = car(res.color)
                            carImage.setAttribute('class', 'table-data')

                            tr.appendChild(id)
                            tr.appendChild(carImage)
                            tr.appendChild(name)
                            tr.appendChild(wins)
                            tr.appendChild(time)

                            tableBody.appendChild(tr)
                        })
                })
            }
        })
    })
}

export default winners;