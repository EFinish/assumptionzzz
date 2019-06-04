<template>
	<div>
		<template v-for="(statement, statementIndex) in stack">
			{{ statementIndex + 1 }}. <stack-row :key="statementIndex" :statement="statement"></stack-row>
		</template>
		<!-- <p>True?: {{ calcTruthValue }}</p> -->
	</div>
</template>

<script>
import StackRow from './stackRow.vue';

export default {
	// components: {
	// 	StackRow
	// },
	props: {
		stack: {
			type: Array,
			default: () => []
		}
	}
}
</script>
