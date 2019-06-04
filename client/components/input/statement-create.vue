<template>
	<div>
		<p>New Statement</p>
		<label for="statement-description">description</label>
		<input id="statement-description" type="text" v-model="form.description">
		<button type="button" @click="submit">Add to Stack</button>
	</div>
</template>

<script>
	import { EventBus } from '../../event-bus';
	import { Statement } from '../../domain/statement'; 

	export default {
		props: {},
		data: () => {
			return {
				form: {
					description: null,
					truth_value: true
				}
			}
		},
		methods: {
			submit: function () {
				const data = {
					description: this.form.description, 
					truth_value: this.form.truth_value, 
					valid_value: true
				}
				EventBus.$emit('add-to-stack', data);
			}
		}
	}
</script>