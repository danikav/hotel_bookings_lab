<template>
  <div class='hotel_booking'>
   <h2> {{hotel_booking.name}} </h2>
   <p> {{hotel_booking.email}} </p>
   <p> {{hotel_booking.status}} </p>

   <button v-on:click='handleDelete(hotel_booking._id)'>Delete Booking</button>
  </div>
</template>

<script>
import {eventBus} from '@main.js'


export default {
    name: 'hotel_booking',
    props: ['hotel_booking'],

    methods: {
        handleDelete(id){
            eventBus.$emit('delete-hotel_booking', id);
        }
    }

}
</script>

<style>


</style>