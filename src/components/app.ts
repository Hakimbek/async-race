import garage from "../view/garage";
import winners from "../view/winners";
import header from "./header/header";

const App = () => {
    (document.getElementById('root') as HTMLElement).innerHTML = header;
    garage();
    winners();
    (document.getElementById('garage') as HTMLElement).click();
}

export default App;