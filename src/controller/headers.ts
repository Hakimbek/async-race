export default class Headers {
    'Content-Type': string;

    constructor(contentType: string) {
        this["Content-Type"] = contentType;
    }
}