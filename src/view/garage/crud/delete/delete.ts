import load from "../../../../controller/loader";
import getAllCars from "../get/getAllCars";

export default function deleteCar(element: HTMLElement) {
    load(`http://127.0.0.1:3000/garage/${element.getAttribute('index')}`, {
        method: 'DELETE'
    }).then(() => getAllCars())

    load(`http://127.0.0.1:3000/winners/${element.getAttribute('index')}`, {
        method: 'DELETE'
    }).then();
}