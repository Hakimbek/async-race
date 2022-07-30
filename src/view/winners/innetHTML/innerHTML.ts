import Header from "../../../components/header/header";
import Winners from "../../../controller/Winners";
import load from "../../../controller/loader";
import Param from "../../../controller/param";
import car from "../../../assets/image/car";

export default function innerHTML() {
    let page = localStorage.getItem('winnersPage');
    load(`http://127.0.0.1:3000/winners?_page=${page}&_limit=10&`, new Param('GET')).then((data) => {
        load(`http://127.0.0.1:3000/winners`, new Param('GET'))
            .then(res2 => {
                (document.getElementById('root') as HTMLElement).innerHTML = `${Header}
                <div class="winners-body" id="winners-body">
                    <h3 class="winners-amount">Winners ( ${res2.length} )</h3>
                    <p class="current-page">Page # ${page}</p>
                    <table>
                        <thead class="winners-table__head">
                            <tr>
                                <th class="winners-table__title">Car ID</th>
                                <th class="winners-table__title">Car</th>
                                <th class="winners-table__title">Name</th>
                                <th class="winners-table__title" id="wins">Wins</th>
                                <th class="winners-table__title" id="time">Best time (seconds)</th>
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

                const pagination = document.createElement('div')
                pagination.setAttribute('class', 'pagination')

                const prev = document.createElement('button')
                prev.setAttribute('class', 'prev')
                prev.setAttribute('id', 'winnersPrev')
                prev.innerText = 'PREV'

                const next = document.createElement('button')
                next.setAttribute('class', 'next')
                next.setAttribute('id', 'winnersNext')
                next.innerText = 'NEXT'

                pagination.appendChild(prev);
                pagination.appendChild(next);
                (document.getElementById('winners-body') as HTMLElement).appendChild(pagination)
            })
    })
}