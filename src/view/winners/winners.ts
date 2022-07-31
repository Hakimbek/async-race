import innerHTML from './crud/get/innerHTML';
import prev from './pagination/prev';
import next from './pagination/next';

const winners = () => {
  document.addEventListener('click', (e) => {
    const targetElement = e.target as HTMLElement;

    if (targetElement.getAttribute('id') === 'winners') {
      innerHTML('none');
    }

    if (targetElement.getAttribute('id') === 'wins') {
      const order = localStorage.getItem('winOrder');

      if (order === 'DESC') {
        localStorage.setItem('winOrder', 'ASC');
      } else {
        localStorage.setItem('winOrder', 'DESC');
      }
      innerHTML('wins', localStorage.getItem('winOrder') + '');
    }

    if (targetElement.getAttribute('id') === 'time') {
      const order = localStorage.getItem('timeOrder');

      if (order === 'DESC') {
        localStorage.setItem('timeOrder', 'ASC');
      } else {
        localStorage.setItem('timeOrder', 'DESC');
      }
      innerHTML('time', localStorage.getItem('timeOrder') + '');
    }

    prev(targetElement);
    next(targetElement);
  });
};

export default winners;