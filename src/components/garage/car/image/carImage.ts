import Car from '../../../../dto/Car';
import carColor from '../../../../random/svg/car';

export default function carImage(value: Car) {
  const carImageHTML = document.createElement('div');
  carImageHTML.setAttribute('class', 'car-image');
  carImageHTML.setAttribute('index', value.id);
  carImageHTML.setAttribute('name', value.name);
  carImageHTML.innerHTML = carColor(value.color);

  return carImageHTML;
}