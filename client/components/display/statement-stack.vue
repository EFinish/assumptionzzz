<template>
	<div>
		<p>Statement Stack</p>
		<template v-for="(statement, statementIndex) in statement_stack">
			<statement-stack-row :key="statementIndex" :statement="statement"></statement-stack-row>
		</template>
		<p>Chain Valid?: {{ calcValidValue === true ? "VALID" : "INVALID" }}</p>
		<p><strong>Chain True?:</strong> {{ calcTruthValue ? "TRUE" : "FALSE" }}</p>
	</div>
</template>

<script>
import StatementStackRow from './statement-stack-row.vue';

export default {
	components: {
		StatementStackRow
	},
	props: {
		statement_stack: {
			type: Array,
			default: () => []
		}
	},
	computed: {
		calcValidValue: function () {
			let valid = true;

			for (let i = 0; i < this.statement_stack.length; i++) {
				//TODO make this more efficient
				if (valid) {
					valid = this.statement_stack[i].valid_value;
				}
			}

			// todo put more validity check for statements within stack
			return valid;
		},
		calcTruthValue: function () {
			// invalid statement = statement false
			if (this.calcValidValue === false) {
				return false;
			}

			// todo put in truth calc logic
			return false;
		}
	},
	methods: {}
}
</script>
