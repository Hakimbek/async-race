import Car from '../../../../../dto/Car';

export default function select(value: Car) {
  const selectHTML = document.createElement('button');
  selectHTML.setAttribute('class', 'select-button');
  selectHTML.setAttribute('id', 'selectCar');
  selectHTML.setAttribute('index', value.id);
  selectHTML.setAttribute('name', value.name);
  selectHTML.setAttribute('color', value.color);
  selectHTML.innerText = 'SELECT';

  return selectHTML;
}