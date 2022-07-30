import load from "../../../controller/loader";
import getAllCars from "../get/getAllCars";

export default function addCar(element: HTMLElement) {
    const data = {
        name: (document.getElementById('add-name') as HTMLInputElement).value,
        color: (document.getElementById('add-color') as HTMLInputElement).value
    }

    if (data.name !== '') {
        load('http://127.0.0.1:3000/garage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(() => getAllCars(element))
    }
}