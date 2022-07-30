import garage from "../view/garage/garage";
import winners from "../view/winners";
import header from "./header/header";
import './garage/garage.css';

const App = () => {
    localStorage.setItem('carWin', 'false');
    (document.getElementById('root') as HTMLElement).innerHTML = header;
    garage();
    winners();
    (document.getElementById('garage') as HTMLElement).click();
}

export default App;