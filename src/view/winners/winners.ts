import load from "../../controller/loader";
import Param from "../../controller/param";
import innerHTML from './innetHTML/innerHTML'

const winners = () => {
    document.addEventListener('click', (e) => {
        let targetElement = e.target as HTMLElement;
        let page = localStorage.getItem('winnersPage');

        if (targetElement.getAttribute('id') === 'winners') {
            innerHTML();
        }


        if (targetElement.getAttribute('id') === 'wins') {
            let order = localStorage.getItem('winOrder');
            let page = localStorage.getItem('winnersPage');

            if (order === 'DESC') {
                localStorage.setItem('winOrder', 'ASC')
            } else {
                localStorage.setItem('winOrder', 'DESC')
            }

            innerHTML()
        }

        if (targetElement.getAttribute('id') === 'time') {
            let order = localStorage.getItem('timeOrder');
            let page = localStorage.getItem('winnersPage');

            if (order === 'DESC') {
                localStorage.setItem('timeOrder', 'ASC')
            } else {
                localStorage.setItem('timeOrder', 'DESC')
            }

            innerHTML()
        }

        // PREV
        if (targetElement.getAttribute('id') === 'winnersPrev') {
            let page = localStorage.getItem('winnersPage')
            if (page !== '1') {
                localStorage.setItem('winnersPage', parseInt(page + '') - 1 + '')
                innerHTML()
            }
        }

        // NEXT
        if (targetElement.getAttribute('id') === 'winnersNext') {
            let page = localStorage.getItem('winnersPage')
            load(`http://127.0.0.1:3000/winners`, new Param('GET'))
                .then(data => {
                    if ((Math.ceil(data.length / 10) > parseInt(page + ''))) {
                        console.log('a')
                        localStorage.setItem('winnersPage', parseInt(page + '') + 1 + '')
                        innerHTML()
                    }
                })
        }
    })
}

export default winners;