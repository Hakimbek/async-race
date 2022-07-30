import load from "../../../controller/loader";

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
        }).then(res => console.log(res)).catch(err => console.log(err))

        window.location.reload();
    }
}