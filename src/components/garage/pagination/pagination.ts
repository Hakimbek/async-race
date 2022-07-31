export default function pagination() {
  const paginationHTML = document.createElement('div');
  paginationHTML.setAttribute('class', 'pagination');

  const prev = document.createElement('button');
  prev.setAttribute('class', 'prev');
  prev.setAttribute('id', 'prev');
  prev.innerText = 'PREV';

  const next = document.createElement('button');
  next.setAttribute('class', 'next');
  next.setAttribute('id', 'next');
  next.innerText = 'NEXT';

  paginationHTML.appendChild(prev);
  paginationHTML.appendChild(next);
  (document.getElementById('garage-body') as HTMLElement).appendChild(paginationHTML);
}