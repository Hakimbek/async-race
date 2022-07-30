import carBrand from "../../../assets/cars/brand";
import carModel from "../../../assets/cars/model";
import color from "../../../assets/cars/color";
import load from "../../../controller/loader";
import getAllCars from "../crud/get/getAllCars";

export default function generateCar(element: HTMLElement) {
    if (element.getAttribute('id') === 'generateCar') {
        for (let i = 0; i < 100; i++) {
            const data = {
                name: `${carBrand[i]} ${carModel[i]}`,
                color: `${color[i]}`
            }

            load('http://127.0.0.1:3000/garage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(() => getAllCars())
        }
    }
}