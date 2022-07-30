import load from "../../../controller/loader";

export default function deleteCar(element: HTMLElement) {
    load(`http://127.0.0.1:3000/garage/${element.getAttribute('index')}`, {
        method: 'DELETE'
    })

    window.location.reload();
}