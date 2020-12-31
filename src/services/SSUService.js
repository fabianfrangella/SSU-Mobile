import HttpClient from "./HttpClient";
import { properties } from "./properties";
import SSUClient from "./SSUClient";

export default class SSUService {
    constructor() {
        // TODO Dependency injection
        this.http = new SSUClient()
    }

    async findDegreeDetails(degreeName) {
        return await this.http.get(properties.SSURoutes.degree, degreeName)
    }
}