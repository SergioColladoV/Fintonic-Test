import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: 'https://opentdb.com/'
        })
    }

    get = id => this.service.get('/api.php?amount=10').then(response => response.data)
}