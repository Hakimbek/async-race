import Car from '../../../../../dto/Car';

export default function remove(value: Car) {
  const removeHTML = document.createElement('button');
  removeHTML.setAttribute('class', 'remove-button');
  removeHTML.setAttribute('id', 'removeCar');
  removeHTML.setAttribute('index', value.id);
  removeHTML.innerText = 'REMOVE';

  return removeHTML;
}