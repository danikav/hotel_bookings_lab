<template>
  <form id="hotel_bookings-form" v-on:submit.prevent="handleSubmit" method="post">
		<h2>Add a Booking</h2>
		<div class="formWrap">
			<label for="name">Name:</label>
			<input type="text" id="name" v-model="name" required/>
		</div>
		<div class="formWrap">
			<label for="email">Email:</label>
			<input type="email" id="email" v-model="email" required/>
		</div>


		<input type="submit" value="Save" id="save"/>
	</form>
</template>

<script>
import { eventBus } from '../main';

export default {
	name: 'hotel-bookings-form',
	data() {
		return {
			name: '',
			email: '',
			status: false
		}
	},
	methods: {
		handleSubmit() {
			const payload = {
				name: this.name,
				email: this.email,
				status: this.status
			};

			eventBus.$emit('submit-booking', payload);
			this.name = this.email = '';
		}
	}
}
</script>

<style>

</style>