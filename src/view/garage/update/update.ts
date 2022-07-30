import load from "../../../controller/loader";
import getAllCars from "../get/getAllCars";

export default function updateCar(element: HTMLElement) {
    if (!(document.getElementById('editName') as HTMLInputElement).disabled) {
        let data = {
            name: (document.getElementById('editName') as HTMLInputElement).value,
            color: (document.getElementById('editColor') as HTMLInputElement).value
        }

        load(`http://127.0.0.1:3000/garage/${element.getAttribute('index')}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(() => getAllCars(element))
    }
}