import load from "../../../controller/loader";
import Param from "../../../dto/param";
import innerHTML from "../crud/get/innerHTML";

export default function next(element: HTMLElement) {
    if (element.getAttribute('id') === 'winnersNext') {
        let page = localStorage.getItem('winnersPage')
        load(`http://127.0.0.1:3000/winners`, new Param('GET'))
            .then(data => {
                if ((Math.ceil(data.length / 10) > parseInt(page + ''))) {
                    console.log('a')
                    localStorage.setItem('winnersPage', parseInt(page + '') + 1 + '')
                    innerHTML('none')
                }
            })
    }
}