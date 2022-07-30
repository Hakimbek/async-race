import crud from "./crud/crud";
import animation from "./animation/animation";
import prev from "./pagination/prev";
import next from "./pagination/next";
import generateCar from "./genearte/generateCar";

const garage = () => {
    document.addEventListener('click', (e) => {
        let targetElement = e.target as HTMLElement;

        crud(targetElement);
        animation(targetElement)

        generateCar(targetElement);

        prev(targetElement)
        next(targetElement)
    });
}

export default garage;