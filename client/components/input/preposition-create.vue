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
				<select id="set-statement" v-model="form.selected_statement_id" @change="setSelectedStatement(index - 1)">
					<option v-for="(statement, index) in statement_stack" :key="index" :value="statement.id">
						{{ statement.description }}
					</option>
				</select>
			</div>
		</div>

		<div v-for="(statement, index) in selected_statements" :key="index">
			<div v-if="statement">
				<p>statement part {{ index + 1 }}: {{ statement.description }}</p>
			</div>
		</div>
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
		methods: {
			setSelectedPrepositionType: function() {
				for (let i = 0; i < this.preposition_types.length; i++) {
					if (this.form.selected_type_id === this.preposition_types[i].id) {
						console.log('check', this.form.selected_type_id, this.preposition_types[i].id);
						this.selected_type = this.preposition_types[i];
						this.selected_statements = new Array((this.preposition_types[i].amount_statements - 1));
						console.log(this.selected_statements.length);
						break;
					}
				}
			},
			setSelectedStatement: function (index) {
				for (let k = 0; k < this.statement_stack.length; k++) {
					if (this.statement_stack[k].id === this.form.selected_statement_id) {
						// console.log('set selected statement', index, this.statement_stack[i].description, )
						this.selected_statements[index] = this.statement_stack[k];
						console.log('set selected statement', index, this.statement_stack[k].description, this.selected_statements);
					}
			// 		break;
				}
			},
			submit: function () {
				console.log(this.form);
			}
		}
	}
</script>