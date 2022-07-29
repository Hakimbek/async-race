import garage from "../view/garage";
import winners from "../view/winners";
import Header from "./header/header";

const App = () => {
    document.getElementById('root').innerHTML = Header;
    garage();
    winners();
    document.getElementById('garage').click();
}

export default App;