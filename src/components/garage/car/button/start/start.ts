import Car from '../../../../../dto/Car';

export default function a(value: Car) {
  const aHTML = document.createElement('button');
  aHTML.setAttribute('class', 'a-button');
  aHTML.setAttribute('id', 'a');
  aHTML.setAttribute('index', value.id);
  aHTML.innerText = 'A';

  return aHTML;
}