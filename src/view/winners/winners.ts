import innerHTML from './crud/get/innerHTML'
import prev from "./pagination/prev";
import next from "./pagination/next";

const winners = () => {
    document.addEventListener('click', (e) => {
        let targetElement = e.target as HTMLElement;

        if (targetElement.getAttribute('id') === 'winners') {
            innerHTML();
        }

        if (targetElement.getAttribute('id') === 'wins') {
            let order = localStorage.getItem('winOrder');

            if (order === 'DESC') {
                localStorage.setItem('winOrder', 'ASC')
            } else {
                localStorage.setItem('winOrder', 'DESC')
            }
            innerHTML()
        }

        if (targetElement.getAttribute('id') === 'time') {
            let order = localStorage.getItem('timeOrder');

            if (order === 'DESC') {
                localStorage.setItem('timeOrder', 'ASC')
            } else {
                localStorage.setItem('timeOrder', 'DESC')
            }
            innerHTML()
        }

        prev(targetElement)
        next(targetElement)
    })
}

export default winners;