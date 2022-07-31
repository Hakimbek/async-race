import Param from '../dto/param';

const load = async (url: string, param: Param) => {
  const response = await fetch(url, {
    method: param.method,
    headers: {
      'Content-Type': '' + param.headers?.['Content-Type'],
    },
    body: param.body,
  });
  return response.json();
};

export default load;