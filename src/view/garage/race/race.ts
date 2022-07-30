import load from "../../../controller/loader";
import Param from "../../../controller/param";
import race from "../animation.func/animation";

export default function carRace() {
    const raceButton = document.getElementById('race') as HTMLElement;
    raceButton.setAttribute('disabled', 'true');

    const cars = document.getElementsByClassName('car-image')
    for (let i = 0; i < cars.length; i++) {
        const car = cars[i] as HTMLElement;
        const id = car.getAttribute('index')
        load(`http://127.0.0.1:3000/engine?id=${id}&status=started`, new Param('PATCH'))
            .then(response => {
                const speed = response.velocity / 10
                let time = new Date()
                const width = window.innerWidth - car.offsetLeft - 150
                const intervalId = race(width, speed * 1000, car, time);

                load(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, new Param('PATCH'))
                    .catch(() => {
                        clearInterval(intervalId);
                    })
            })
    }
}