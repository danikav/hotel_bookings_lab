<template>
  <div class='hotel-booking'>
   <h2> {{booking.name}} </h2>
   <p> {{booking.email}} </p>
   <p :class="booking.status ? 'green' : 'red'"> {{booking.status}} </p>

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

<style scoped>

.green {
    color:green;
}
.red {
    color:red
}
</style>