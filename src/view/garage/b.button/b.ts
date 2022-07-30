import load from "../../../controller/loader";
import Param from "../../../controller/param";

export default function bButton(element: HTMLElement) {
    const b = element;
    const a = b.previousSibling as HTMLElement;
    b.setAttribute('class', 'b-button gray')
    a.setAttribute('class', 'a-button')

    const cars = document.getElementsByClassName('car-image')
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].getAttribute('index') === a.getAttribute('index')) {
            const car = cars[i] as HTMLElement;
            const id = car.getAttribute('index')

            load(`http://127.0.0.1:3000/engine?id=${id}&status=stopped`, new Param('PATCH'))
                .then(response => {
                    car.style.transform = `translateX(0px)`;
                })
            break;
        }
    }
}