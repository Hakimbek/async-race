import Header from "../../../../components/header/header";
import Winners from "../../../../dto/Winners";
import load from "../../../../controller/loader";
import Param from "../../../../dto/param";
import pagination from "../../../../components/winners/pagination/pagination";
import winners from "../../../../components/winners/winners";

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
                    load(`http://127.0.0.1:3000/garage/${value.id}`, new Param('GET')).then(res => winners(value, res));
                })
                pagination();
            })
    })
}