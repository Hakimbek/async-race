import innerHTML from "../crud/get/innerHTML";

export default function prev(element: HTMLElement) {
    if (element.getAttribute('id') === 'winnersPrev') {
        let page = localStorage.getItem('winnersPage')
        if (page !== '1') {
            localStorage.setItem('winnersPage', parseInt(page + '') - 1 + '')
            innerHTML()
        }
    }
}