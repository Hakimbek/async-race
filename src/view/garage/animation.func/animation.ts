export default function race(endX: number, duration: number, element: HTMLElement, time: Date | null) {
    let currentX = element.offsetLeft;
    const frameCount = duration / 1000 * 60;
    const dx = (endX - currentX) / frameCount;

    const intervalId = setInterval(() => {
        currentX += dx;

        if (currentX > endX) {
            clearInterval(intervalId);
            if (time) {
                if (localStorage.getItem('carWin') === 'false') {
                    localStorage.setItem('carWin', 'true')
                    let finalTime = (Date.now() - time.getTime()) / 1000;
                    const winner = document.getElementById('winner') as HTMLElement;
                    winner.innerText = `${element.getAttribute('name')} win the race (${finalTime}s)`
                    winner.classList.remove('display');
                }
            }
        }

        element.style.transform = `translateX(${currentX}px)`;
    }, 16)

    return intervalId;
}