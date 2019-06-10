<template>
	<div>
		<p>New Proposition</p>
		<label for="proposition-type">type</label>
		<select id="proposition-type" v-model="form.type">
			<option v-for="(preposition, index) in preposition_types" :key="index" :value="preposition.value">
				{{ preposition.label }}
			</option>
		</select>
		<button type="button" @click="submit">Add to Proposition Stack</button>
	</div>
</template>

<script>
	import { EventBus } from '../../event-bus';

	export default {
		props: {
			preposition_types: {
				type: Array,
				default: function () {
					return [];
				}
			}
		},
		data: () => {
			return {
				form: {
					type: null
				}
			}
		},
		methods: {
			submit: function () {
				console.log(this.form);
			}
		}
	}
</script>