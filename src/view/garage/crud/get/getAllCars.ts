import load from '../../../../controller/loader';
import Param from '../../../../dto/param';
import header from '../../../../components/header/header';
import add from '../../../../components/garage/controllers/add/add';
import update from '../../../../components/garage/controllers/update/update';
import button from '../../../../components/garage/controllers/button/button';
import winner from '../../../../components/garage/winner/message/winner';
import Car from '../../../../dto/Car';
import pagination from '../../../../components/garage/pagination/pagination';
import car from '../../../../components/garage/car/car';

export default function getAllCars() {
  const page = localStorage.getItem('garagePage');

  load(`http://127.0.0.1:3000/garage?_page=${page}&_limit=7`, new Param('GET')).then(data => {
    load('http://127.0.0.1:3000/garage', new Param('GET'))
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
          car(value);
        });

        pagination();
      });
  });
}