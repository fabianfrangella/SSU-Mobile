import HttpClient from "./HttpClient";

export default class SSUClient extends HttpClient {
    constructor() {
        super(process.env.SSU_URL)
    }
}