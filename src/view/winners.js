import Header from "./header";
import load from "../controller/loader";

const winners = () => {
    document.addEventListener('click', (e) => {
        if (e.target.getAttribute('id') === 'winners') {
            document.getElementById('root').innerHTML = `${Header}
            <div class="gw">
                <h3>Winners</h3>
            </div>`
        }
    })
}

export default winners;