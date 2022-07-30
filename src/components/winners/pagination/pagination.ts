export default function pagination() {
    const pagination = document.createElement('div')
    pagination.setAttribute('class', 'pagination')

    const prev = document.createElement('button')
    prev.setAttribute('class', 'prev')
    prev.setAttribute('id', 'winnersPrev')
    prev.innerText = 'PREV'

    const next = document.createElement('button')
    next.setAttribute('class', 'next')
    next.setAttribute('id', 'winnersNext')
    next.innerText = 'NEXT'

    pagination.appendChild(prev);
    pagination.appendChild(next);
    (document.getElementById('winners-body') as HTMLElement).appendChild(pagination)
}