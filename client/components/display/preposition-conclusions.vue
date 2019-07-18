<template>
	<ul>
		<li v-for="(preposition, prepositionIndex) in preposition_stack" :key="prepositionIndex">
			{{ calcConclusions([preposition_stack[prepositionIndex]]) }}
		</li>
		<li>TOTAL CONCLUSIONS POTATO: {{ calcConclusionsTotal(preposition_stack) }}</li>
		<button type="button" @click="wtf">wtf</button>
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
			console.log('beginning conclusion calculations', prepArray, prepArray.length);

			let prep;
			let calcResponse;
			let prepTruths = {};

			for (let i = 0; i < prepArray.length; i++) {
				prep = prepArray[i];

				console.log('calc this', prep.id, prep.type, prep.type.calculation, prep.statements, prep.statements[0].description);
				
				calcResponse = prep.type.calculation(prep.statements);

				console.log('truths found!', i, calcResponse);

				// prepTruths = { ...prepTruths, ...calcResponse };

				console.log('truths concatenated!', i, prepTruths);
			}

			return prepTruths;
		},
		calcConclusionsTotal: function(prepArray) {

			let prep;
			let calcResponse;
			let prepTruths = {};

			for (let i = 0; i < prepArray.length; i++) {
				prep = prepArray[i];


				calcResponse = prep.type.calculation(prep.statements);


				prepTruths = { ...prepTruths, ...calcResponse };

			}

			return prepTruths;
		},
		wtf: function () {
			for (let i = 0; i < this.preposition_stack.length; i++ ) {
				console.log('WTF', this.preposition_stack[i].id, this.preposition_stack[i].statements.length, this.preposition_stack[i].statements[0].description);
			}
		}
	}
}
</script>
