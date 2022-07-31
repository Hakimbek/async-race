export default function b() {
  const bHTML = document.createElement('button');
  bHTML.setAttribute('class', 'b-button gray');
  bHTML.setAttribute('id', 'b');
  bHTML.innerText = 'B';

  return bHTML;
}