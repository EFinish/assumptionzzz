<template>
	<div>
		<p>New Statement</p>
		<label for="statement-description">description</label>
		<input 
			id="statement-description"
			v-model="form.description"
			type="text" 
		>
		<button type="button" @click="submit">Add to Statement Stack</button>
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
			},
			devIncId: 1
		}
	},
	methods: {
		submit: function () {
			const data = {
				id: this.devIncId++,
				description: this.form.description, 
				truth_value: this.form.truth_value,
				referents: []
			};
			
			EventBus.$emit('statement-stack-add', data);
		}
	}
}
</script>