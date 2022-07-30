import addCar from "./add/add";
import deleteCar from "./delete/delete";
import selectCar from "./select/select";
import updateCar from "./update/update";
import race from "./animation.func/animation";
import aButton from "./a.button/a";
import bButton from "./b.button/b";
import carRace from "./race/race";
import reset from "./reset/reset";
import getAllCars from "./get/getAllCars";
import load from "../../controller/loader";
import Param from "../../controller/param";

const garage = () => {
    document.addEventListener('click', (e) => {
        let targetElement = e.target as HTMLElement;

        // GET ALL CARS
        if (targetElement.getAttribute('id') === 'garage') {
            getAllCars(targetElement)
        }

        // ADD CAR
        if (targetElement.getAttribute('id') === 'addCar') {
            addCar(targetElement);
        }

        // DELETE CAR
        if (targetElement.getAttribute('id') === 'removeCar') {
            deleteCar(targetElement)
        }

        // SELECT CAR
        if (targetElement.getAttribute('id') === 'selectCar') {
            selectCar(targetElement);
        }

        // EDIT CAR
        if (targetElement.getAttribute('id') === 'editButton') {
            updateCar(targetElement);
        }

        // A BUTTON
        if (targetElement.getAttribute('id') === 'a') {
            aButton(targetElement)
        }

        // B BUTTON
        if (targetElement.getAttribute('id') === 'b') {
            bButton(targetElement);
        }

        // RACE
        if (targetElement.getAttribute('id') === 'race') {
            carRace();
        }

        // RESET
        if (targetElement.getAttribute('id') === 'reset') {
            reset();
        }

        // PREV
        if (targetElement.getAttribute('id') === 'prev') {
            let page = localStorage.getItem('garagePage')
            if (page !== '1') {
                localStorage.setItem('garagePage', parseInt(page + '') - 1 + '')
                getAllCars(targetElement)
            }
        }

        // NEXT
        if (targetElement.getAttribute('id') === 'next') {
            let page = localStorage.getItem('garagePage')
            load(`http://127.0.0.1:3000/garage`, new Param('GET'))
                .then(data => {
                    if ((Math.ceil(data.length / 7) > parseInt(page + ''))) {
                        localStorage.setItem('garagePage', parseInt(page + '') + 1 + '')
                        getAllCars(targetElement)
                    }
                })
        }
    });
}

export default garage;