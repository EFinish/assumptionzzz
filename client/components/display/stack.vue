<template>
	<div>
		<template v-for="(statement, statementIndex) in stack">
			{{ statementIndex + 1 }}. <stack-row :key="statementIndex" :statement="statement"></stack-row>
		</template>
		<p>Chain Valid?: {{ calcValidValue ? "VALID" : "INVALID" }}</p>
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
	calculated: {
		calcValidValue: function () {
			const invalid = this.stack.find(function(statement) {
				return statement.valid_value !== false;
			});

			console.log(!invalid)

			return !invalid;
		},
		calcTruthValue: function () {
			// invalid statement = statement false
			if (this.calcValidValue() === false) {
				return false;
			}

			// todo put in truth calc logic
			return false;
		}
	}
}
</script>
