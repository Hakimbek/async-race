import load from "../../../../controller/loader";
import Param from "../../../../dto/param";
import Winners from "../../../../dto/Winners";

export default function add(finalTime: number, element: HTMLElement) {
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
                headers: {'Content-Type': 'application/json'},
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
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(anotherObj)
            })
        }
    })
}