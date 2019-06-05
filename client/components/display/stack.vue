<template>
	<div>
		<template v-for="(statement, statementIndex) in stack">
			{{ statementIndex + 1 }}. <stack-row :key="statementIndex" :statement="statement"></stack-row>
		</template>
		<p>Chain Valid?: {{ calcValidValue === true ? "VALID" : "INVALID" }}</p>
		<p><strong>Chain True?:</strong> {{ calcTruthValue ? "TRUE" : "FALSE" }}</p>
	</div>
</template>

<script>
import StackRow from './stackRow.vue';

export default {
	components: {
		StackRow
	},
	props: {
		stack: {
			type: Array,
			default: () => []
		}
	},
	computed: {
		calcValidValue: function () {
			let valid = true;

			for (let i = 0; i < this.stack.length; i++) {
				//TODO make this more efficient
				if (valid) {
					valid = this.stack[i].valid_value;
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
	}
}
</script>
