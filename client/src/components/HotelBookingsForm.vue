<template>
  <form id="hotel_bookings-form" v-on:submit.prevent="handleSubmit" method="post">
		<h2>Add a Booking</h2>
		<div class="formWrap">
			<label for="name">Name:</label>
			<input type="text" id="name" v-model="name" />
		</div>
		<div class="formWrap">
			<label for="email">Email:</label>
			<input type="email" id="email" v-model="email" />
		</div>
		<div class="formWrap">
			<label for="status">Status:</label>
			<input type="text" id="status" v-model="status" />
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
			status: ''
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
			this.status = '';
		}
	}
}
</script>

<style>

</style>