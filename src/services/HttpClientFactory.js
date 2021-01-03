import HttpClient from "./HttpClient"

export default class HttpClientFactory {
    static getHttpClient(url) {
        return new HttpClient(url)
    }
}