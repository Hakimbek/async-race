import Param from "./param";

const load = async (url: string, param: Param) => {
    let response = await fetch(url, {
        method: param.method,
        headers: {
          'Content-Type': '' + param.headers?.["Content-Type"]
        },
        body: param.body
    })
    return await response.json();
}

export default load;