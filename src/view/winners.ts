import Header from "../components/header/header";
import load from "../controller/loader";

const winners = () => {
    document.addEventListener('click', (e) => {
        if ((e.target as HTMLElement).getAttribute('id') === 'winners') {
            (document.getElementById('root') as HTMLElement).innerHTML = `${Header}
            <div class="gw">
                <h3>Winners</h3>
            </div>`
        }
    })
}

export default winners;