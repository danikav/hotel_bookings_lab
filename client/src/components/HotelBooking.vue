<template>
  <div class='hotel-booking'>
   <h2> {{booking.name}} </h2>
   <p> {{booking.email}} </p>
   <p> {{booking.status}} </p>

   <button v-on:click='handleDelete(booking._id)'>Delete Booking</button>
  </div>
</template>

<script>
import {eventBus} from '../main.js'


export default {
    name: 'hotel-booking',
    props: ['booking'],

    methods: {
        handleDelete(id){
            eventBus.$emit('delete-booking', id);
        }
    }

}
</script>

<style>


</style>