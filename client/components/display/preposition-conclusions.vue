<template>
	<ul>
		<li v-for="(preposition, prepositionIndex) in preposition_stack" :key="prepositionIndex">
			{{ calcConclusions([preposition]) }}
		</li>
		<li>TOTAL CONCLUSIONS: {{ calcConclusions(preposition_stack) }}</li>
	</ul>
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
		},
		preposition_types: {
			type: Array,
			default: function () {
				return [];
			}
		}
	},
	computed: {},
	methods: {
		calcConclusions: function(prepArray) {
			console.log('beginning conclusion calculations');

			let prep;
			let calcResponse;
			let prepTruths = {};

			for (let i = 0; i < prepArray.length; i++) {
				prep = prepArray[i];

				console.log('calc this', prep.type, prep.type.calculation, prep.statements);

				calcResponse = prep.type.calculation(prep.statements);

				console.log('truths found!', i, calcResponse);

				// prepTruths = { ...prepTruths, ...calcResponse };

				console.log('truths concatenated!', i, prepTruths);
			}

			return prepTruths;
		}
	}
}
</script>
