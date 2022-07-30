import getAllCars from "../crud/get/getAllCars";

export default function prev(element: HTMLElement) {
    if (element.getAttribute('id') === 'prev') {
        let page = localStorage.getItem('garagePage')
        if (page !== '1') {
            localStorage.setItem('garagePage', parseInt(page + '') - 1 + '')
            getAllCars()
        }
    }
}