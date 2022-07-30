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

const garage = () => {
    document.addEventListener('click', (e) => {
        let targetElement = e.target as HTMLElement;

        // GET ALL CARS
        getAllCars(targetElement)

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
    });
}

export default garage;