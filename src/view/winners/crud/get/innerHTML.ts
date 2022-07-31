import Header from "../../../../components/header/header";
import load from "../../../../controller/loader";
import Param from "../../../../dto/param";
import pagination from "../../../../components/winners/pagination/pagination";
import iteratePromise from "./iteartePromise";

export default function innerHTML(sort: string, order?: string) {
    load(`http://127.0.0.1:3000/winners`, new Param('GET'))
        .then(res => {
            let page = localStorage.getItem('winnersPage');
            (document.getElementById('root') as HTMLElement).innerHTML = `${Header}
                <div class="winners-body" id="winners-body">
                    <h3 class="winners-amount">Winners ( ${res.length} )</h3>
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
            let url = `http://127.0.0.1:3000/winners?_page=${page}&_limit=10&`;

            if (sort === 'time') {
                url += `_sort=time&_order=${order}`
            }

            if (sort === 'wins') {
                url += `_sort=wins&_order=${order}`
            }

            load(url, new Param('GET')).then((data) => {
                iteratePromise(data)
                pagination();
            })
        });
}