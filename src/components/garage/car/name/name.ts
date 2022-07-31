import Car from '../../../../dto/Car';

export default function name(value: Car) {
  const nameHTML = document.createElement('div');
  nameHTML.setAttribute('class', 'car-name');
  nameHTML.innerText = value.name;

  return nameHTML;
}