<template>
  <div id="app">
    <hotel-bookings-form />
    <hotel-grid :bookings="bookings"/>
  </div>
</template>

<script>
import { eventBus } from './main';
import HotelBookingsForm from './components/HotelBookingsForm.vue';
import HotelBookingsGrid from './components/HotelBookingsGrid.vue';
import BookingService from './services/BookingService.js'

export default {
  name: 'app',
  components: {
    'hotel-bookings-form': HotelBookingsForm,
    'hotel-grid': HotelBookingsGrid
  },
  data() {
    return {
      bookings: []
    };
  },
	mounted() {
    this.fetchBookings();

    eventBus.$on('submit-booking', payload => {
      BookingService.postBookings(payload)
				.then(booking => this.bookings.push(booking));
    });

    eventBus.$on('delete-booking', id => {
      BookingService.deleteBookings(id)
        .then(() => {
          const index = this.bookings.findIndex(booking => booking._id === id);
          this.bookings.splice(index, 1);
        });
    });
  },
  methods: {
    fetchBookings() {
      BookingService.getBookings()
        .then(data => this.bookings = data);
    }
  }
}
</script>

<style>

</style>
