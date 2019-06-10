<template>
	<div>
		<p>Preposition Stack</p>
		<template v-for="(preposition, prepositionIndex) in preposition_stack">
			{{ prepositionIndex + 1 }}. <preposition-stack-row :key="prepositionIndex" :preposition="preposition"></preposition-stack-row>
		</template>
	</div>
</template>

<script>
import PrepositionStackRow from './preposition-stack-row.vue';

export default {
	components: {
		PrepositionStackRow
	},
	props: {
		preposition_stack: {
			type: Array,
			default: () => []
		}
	},
	computed: {}
}
</script>
