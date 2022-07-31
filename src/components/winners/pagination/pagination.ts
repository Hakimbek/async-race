export default function pagination() {
  const paginationHTML = document.createElement('div');
  paginationHTML.setAttribute('class', 'pagination');

  const prev = document.createElement('button');
  prev.setAttribute('class', 'prev');
  prev.setAttribute('id', 'winnersPrev');
  prev.innerText = 'PREV';

  const next = document.createElement('button');
  next.setAttribute('class', 'next');
  next.setAttribute('id', 'winnersNext');
  next.innerText = 'NEXT';

  paginationHTML.appendChild(prev);
  paginationHTML.appendChild(next);
  (document.getElementById('winners-body') as HTMLElement).appendChild(paginationHTML);
}