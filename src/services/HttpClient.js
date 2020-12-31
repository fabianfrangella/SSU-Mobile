import axios from "axios"

export default class HttpClient {
    constructor(baseUrl) {
        this.client = axios.create({
            baseURL: baseUrl
        })
    }

    get(path, params) {
        return this.client.get(path, {params})
    }

    post(path, data) {
        return this.client.post(path, data)
    }
}