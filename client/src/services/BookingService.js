const baseURL = 'http://localhost:3000/api/hotel_bookings/'

export default {
    getBookings(){
        return fetch(baseURL)
        .then( res => res.json())
    },

    postBookings(payload){
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    },

    deleteBookings(id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    },
    checkIn(id, payload) {
        return fetch(baseURL + id, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json());
    }
}