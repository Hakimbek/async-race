import Winners from '../../../../dto/Winners';
import load from '../../../../controller/loader';
import Param from '../../../../dto/param';
import winners from '../../../../components/winners/winners';

export default function iteratePromise(data: Array<Winners>) {
  load(`http://127.0.0.1:3000/garage/${data[0].id}`, new Param('GET'))
    .then(res => {
      if (data.length !== 1) {
        iteratePromise(data.slice(1));
      }

      winners(data[0], res);
    });
}