import getAllCars from './get/getAllCars';
import addCar from './add/add';
import deleteCar from './delete/delete';
import selectCar from './select/select';
import updateCar from './update/update';

export default function crud(element: HTMLElement) {
  // GET ALL CARS
  if (element.getAttribute('id') === 'garage') {
    getAllCars();
  }
  // ADD CAR
  if (element.getAttribute('id') === 'addCar') {
    addCar();
  }
  // DELETE CAR
  if (element.getAttribute('id') === 'removeCar') {
    deleteCar(element);
  }
  // SELECT CAR
  if (element.getAttribute('id') === 'selectCar') {
    selectCar(element);
  }
  // EDIT CAR
  if (element.getAttribute('id') === 'editButton') {
    updateCar(element);
  }
}