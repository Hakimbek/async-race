const load = async (url, param) => {
    let response = await fetch(url, param)
    return await response.json();
}

export default load;