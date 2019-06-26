<template>
	<div>
		<p>Preposition Stack</p>
		<template v-for="(preposition, prepositionIndex) in preposition_stack">
			{{ prepositionIndex + 1 }}. <preposition-stack-row :key="prepositionIndex" :preposition="preposition"></preposition-stack-row>
		</template>
		<p>--------------------------</p>
		<preposition-conclusions :preposition_stack="preposition_stack" :preposition_types="preposition_types"></preposition-conclusions>
	</div>
</template>

<script>
import PrepositionStackRow from './preposition-stack-row.vue';
import PrepositionConclusions from './preposition-conclusions.vue';

export default {
	components: {
		PrepositionStackRow,
		PrepositionConclusions
	},
	props: {
		preposition_stack: {
			type: Array,
			default: () => []
		},
		preposition_types: {
			type: Array,
			default: function () {
				return [];
			}
		}
	},
	computed: {}
}
</script>
