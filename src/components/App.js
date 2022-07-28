import garage from "../view/garage";
import winners from "../view/winners";
import Header from "../view/header";

const App = () => {

    if (!localStorage.getItem('firstLoad')) {
        localStorage.setItem('page', 'garage');
        localStorage.setItem('firstLoad', ' ');
    }

    document.getElementById('root').innerHTML = Header;
    garage();
    winners();
    document.getElementById('garage').click();
}

export default App;