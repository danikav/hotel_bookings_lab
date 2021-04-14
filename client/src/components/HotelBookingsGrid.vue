<template>
    <div id="HotelBookingsGrid">
        <hotel-booking v-for="booking, index in bookings" :key="index" :booking="booking" />
    </div>
</template>

<script>
import HotelBooking from './HotelBooking.vue'

export default {
    name: 'hotel-grid',
    components: {
        'hotel-booking': HotelBooking
    },
    props: ['bookings']

}
</script>

<style>

</style>