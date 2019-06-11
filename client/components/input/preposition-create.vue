<template>
	<div>
		<p>New Proposition</p>
		<div>
			<label for="proposition-type">type</label>
			<select id="proposition-type" v-model="form.selected_type_id" @change="setSelectedPrepositionType($event)">
				<option v-for="(preposition, index) in preposition_types" :key="index" :value="preposition.id">
					{{ preposition.label }}
				</option>
			</select>
		</div>
		<!-- <div v-for="(preposition_statement, index) in selected_statements" :key="index">
			<label for="preposition-statement">statement part {{ index }}</label>
			<select id="preposition-statement" @change="">
				<option v-for="(preposition, index) in preposition_types" :key="index" :value="preposition.id">
					{{ preposition.label }}
				</option>
			</select>
		</div> -->
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
					selected_type_id: null,
					selected_statements: []
				}
			}
		},
		methods: {
			setSelectedPrepositionType: () => {
				//TODO make this more efficiently
				for (let i = 0; i < this.preposition_types.length; i++) {
					if (this.selected_type_id === this.preposition_types[i].id) {
						let blankSelectedStatements = [];
						for (let k = 0; k < this.preposition_types[i].amount_statement; k++) {
							blankSelectedStatements.push({});
						}
						this.selected_statements = blankSelectedStatements;
					}
				}
			},
			submit: function () {
				console.log(this.form);
			}
		}
	}
</script>