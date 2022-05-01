import http from '../http-common'

class SupTeamDataService {
    getAll() {
        return http.get('/supteams/findall')
    }
    get(id) {
        return http.get(`/supteams/findone/${id}`)
    }
    create(data) {
        return http.post('/supteams/create', data)
    }
    update(id, data) {
        return http.put(`/supteams/update/${id}`, data)
    }
    delete(id) {
        return http.delete(`/supteams/delete/${id}`)
    }
    deleteAll() {
        return http.delete(`/supteams/deleteall`)
    }
    findByTitle(title) {
        return http.get(`/supteams?title=${title}`)
    }
    findPublished() {
        return http.get(`/supteams/published`)
    }
}

export default new SupTeamDataService()
