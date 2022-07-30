import Car from "../../../../dto/Car";
import carColor from "../../../../assets/image/car";

export default function carImage(value: Car) {
    const carImage = document.createElement('div');
    carImage.setAttribute('class', 'car-image')
    carImage.setAttribute('index', value.id)
    carImage.setAttribute('name', value.name)
    carImage.innerHTML = carColor(value.color)

    return carImage;
}