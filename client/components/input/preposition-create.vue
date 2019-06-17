<template>
	<div>
		<p>New Proposition</p>
		<div>
			<label for="proposition-type">type</label>
			<select id="proposition-type" v-model="form.selected_type_id" @change="setSelectedPrepositionType()">
				<option v-for="(preposition, index) in preposition_types" :key="index" :value="preposition.id">
					{{ preposition.label }}
				</option>
			</select>
		</div>
 
 		<div v-if="selected_type !== null">
			<div v-for="(index) in selected_type.amount_statements" :key="index">
				<label for="set-statement">set statement {{ index }}</label>
				<select id="set-statement" v-model="form.selected_statement_id" @change="setSelectedStatement(index)">
					<option v-for="(statement, index) in statement_stack" :key="index" :value="statement.id">
						{{ statement.description }}
					</option>
				</select>
			</div>
		</div>

		<!-- <div v-for="(statement, index) in selected_statements" :key="index">
			<label for="preposition-statement">statement part {{ index }}</label>
		</div>
		<button type="button" @click="submit">Add to Proposition Stack</button> -->
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
			},
			statement_stack: {
				type: Array,
				default: () => {
					return [];
				}
			}
		},
		data: () => {
			return {
				form: {
					selected_type_id: null,
					selected_statement_id: null,
				},
				selected_type: null,
				selected_statements: []
			}
		},
		computed: {
			tear: () => {
				return this.selected_type.amount_statement;
			}
		},
		methods: {
			setSelectedPrepositionType: function() {
				for (let i = 0; i < this.preposition_types.length; i++) {
					if (this.form.selected_type_id === this.preposition_types[i].id) {
						console.log('check', this.form.selected_type_id, this.preposition_types[i].id);
						this.selected_type = this.preposition_types[i];
						break;
				// 		let blankSelectedStatements = [];
				// 		for (let k = 0; k < this.preposition_types[i].amount_statement; k++) {
				// 			blankSelectedStatements.push({});
				// 		}
				// 		this.selected_statements = blankSelectedStatements;
				// 		continue;
					}
				}

				//TODO make this more efficiently
				// for (let i = 0; i < this.preposition_types.length; i++) {
				// 	// console.log('check', this.form.selected_type_id, this.preposition_types[i].id);
				// 	if (this.form.selected_type_id === this.preposition_types[i].id) {
				// 		let blankSelectedStatements = [];
				// 		for (let k = 0; k < this.preposition_types[i].amount_statement; k++) {
				// 			blankSelectedStatements.push({});
				// 		}
				// 		this.selected_statements = blankSelectedStatements;
				// 		continue;
				// 	}
				// }
			},
			setSelectedStatement: function (index) {
				for (let i = 0; i < 20; i++)
				// for (let i = 0; i < this.statement_stack.length; i++) {
					// if (this.statement_stack[i].id === this.form.selected_statement_id) {
						// this.selected_statements[index] = this.statement_stack[i];
				// 		break;
					// }
				}
			},
			blog: () => {

			},
			submit: function () {
				console.log(this.form);
			}
		}
	}
</script>