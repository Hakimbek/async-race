import Headers from "./headers";

export default class Param {
    method: string;
    headers?: Headers;
    body?: string;

    constructor(method: string, headers?: Headers, body?: string) {
        this.method = method;
        this.headers = headers;
        this.body = body;
    }
}