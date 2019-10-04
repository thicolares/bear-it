import {client} from './'

export default {
    create(name, description) {
        return client.post('/api/project/create', {
            name,
            description
        }).then(response => response.data)
    },
    userList() {
        return client.get('/api/project/user-list').then(response => response.data)
    }
}