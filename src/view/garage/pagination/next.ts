import load from "../../../controller/loader";
import Param from "../../../dto/param";
import getAllCars from "../crud/get/getAllCars";

export default function next(element: HTMLElement) {
    if (element.getAttribute('id') === 'next') {
        let page = localStorage.getItem('garagePage')
        load(`http://127.0.0.1:3000/garage`, new Param('GET'))
            .then(data => {
                if ((Math.ceil(data.length / 7) > parseInt(page + ''))) {
                    localStorage.setItem('garagePage', parseInt(page + '') + 1 + '')
                    getAllCars()
                }
            })
    }
}