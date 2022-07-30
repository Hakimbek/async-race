import load from "../../../controller/loader";
import Param from "../../../controller/param";
import Winners from "../../../controller/Winners";

export default function race(endX: number, duration: number, element: HTMLElement, time: Date | null) {
    let currentX = element.offsetLeft;
    const frameCount = duration / 1000 * 60;
    const dx = (endX - currentX) / frameCount;

    const intervalId = setInterval(() => {
        currentX += dx;

        if (currentX > endX) {
            clearInterval(intervalId);
            if (time) {
                if (localStorage.getItem('carWin') === 'false') {
                    localStorage.setItem('carWin', 'true')
                    let finalTime = (Date.now() - time.getTime()) / 1000;
                    const winner = document.getElementById('winner') as HTMLElement;
                    winner.innerText = `${element.getAttribute('name')} win the race (${finalTime}s)`
                    winner.classList.remove('display');

                    load('http://127.0.0.1:3000/winners', new Param('GET')).then((data) => {
                        let bool = false;
                        let winnersValue = new Winners(0, 0, 0, '');

                        data.forEach((value: Winners) => {
                            if ((value.id + '') === element.getAttribute('index')) {
                                bool = true
                                winnersValue = value;
                            }
                        })

                        if (bool) {
                            let obj = {
                                wins: winnersValue.wins + 1,
                                time: finalTime < winnersValue.time ? finalTime  : winnersValue.time
                            }

                            load(`http://127.0.0.1:3000/winners/${winnersValue.id}`, {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(obj)
                            })
                        } else {
                            let anotherObj = {
                                id: element.getAttribute('index'),
                                wins: 1,
                                time: parseFloat(finalTime + ''),
                            };

                            load(`http://127.0.0.1:3000/winners`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(anotherObj)
                            })
                        }
                    })
                }
            }
        }

        element.style.transform = `translateX(${currentX}px)`;
    }, 16)

    return intervalId;
}