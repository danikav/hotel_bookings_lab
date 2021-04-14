const baseURL = 'http://localhost:3000/api/hotel_bookings'

export default {
    getHotel_bookings(){
        return fetch(baseURL)
        .then( res = res.json())
    },

    postHotel_bookings(payload){
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    },

    deleteHotel_bookings(id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    }
}