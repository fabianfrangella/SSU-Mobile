
import HttpClientFactory from "./HttpClientFactory";
import { properties } from "./properties";

export default class SSUService {
    constructor() {
        this.http = HttpClientFactory.getHttpClient(process.env.SSU_URL)
    }

    async findDegreeDetails(degreeName) {
        return await this.http.get(properties.SSURoutes.degree, degreeName)
    }
}