import load from "../../../../controller/loader";
import Param from "../../../../dto/param";
import race from "../func/animation";

export default function aButton(element: HTMLElement) {
    const a = element;
    const b = a.nextSibling as HTMLElement
    a.setAttribute('class', 'a-button gray')
    a.setAttribute('disabled', 'true')
    b.setAttribute('class', 'b-button')

    const cars = document.getElementsByClassName('car-image')
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].getAttribute('index') === a.getAttribute('index')) {
            const car = cars[i] as HTMLElement;
            const id = car.getAttribute('index')

            load(`http://127.0.0.1:3000/engine?id=${id}&status=started`, new Param('PATCH'))
                .then(response => {
                    const speed = response.velocity / 10

                    const width = window.innerWidth - car.offsetLeft - 150
                    const intervalId = race(width, speed * 1000, car, null);

                    load(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, new Param('PATCH'))
                        .catch(() => {
                            clearInterval(intervalId);
                        })
                })
            break;
        }
    }
}