import garage from "../view/garage/garage";
import winners from "../view/winners/winners";
import header from "./header/header";
import './garage/garage.css';
import './winners/winners.css'
import './garage/pagination/pagination.css'

const App = () => {
    localStorage.setItem('carWin', 'false');
    localStorage.setItem('winOrder', 'ASC');
    localStorage.setItem('winnersPage', '1');
    localStorage.setItem('garagePage', '1');
    localStorage.setItem('timeOrder', 'ASC');
    (document.getElementById('root') as HTMLElement).innerHTML = header;
    garage();
    winners();
    (document.getElementById('garage') as HTMLElement).click();
}

export default App;