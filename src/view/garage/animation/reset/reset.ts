import load from "../../../../controller/loader";
import Param from "../../../../dto/param";

export default function reset() {
    const raceButton = document.getElementById('race') as HTMLElement;
    raceButton.removeAttribute('disabled')

    const winner = document.getElementById('winner') as HTMLElement;
    winner.classList.add('display');

    localStorage.setItem('carWin', 'false');

    const cars = document.getElementsByClassName('car-image')
    for (let i = 0; i < cars.length; i++) {
        const id = cars[i].getAttribute('index');
        load(`http://127.0.0.1:3000/engine?id=${id}&status=stopped`, new Param('PATCH'))
            .then(response => {
                const car = cars[i] as HTMLElement;
                car.style.transform = `translateX(0px)`;
            })
    }
}