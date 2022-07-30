export default function pagination() {
    const pagination = document.createElement('div')
    pagination.setAttribute('class', 'pagination')

    const prev = document.createElement('button')
    prev.setAttribute('class', 'prev')
    prev.setAttribute('id', 'prev')
    prev.innerText = 'PREV'

    const next = document.createElement('button')
    next.setAttribute('class', 'next')
    next.setAttribute('id', 'next')
    next.innerText = 'NEXT'

    pagination.appendChild(prev);
    pagination.appendChild(next);
    (document.getElementById('garage-body') as HTMLElement).appendChild(pagination)
}