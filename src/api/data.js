import http from './http'

export function getData() {
    return http.axios_get('/static/data.json')
}