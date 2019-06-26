<template>
	<div class="stack-row">
		<div class="stack-row-description">{{ prepositionDescription }}</div>
	</div>
</template>

<style src='./stack-row.css'></style>

<script> 
import { EventBus } from '../../event-bus';
import { Preposition } from '../../domain/preposition'; 
import {
	PREPOSITION_THIS,
	PREPOSITION_IF_THEN,
	PREPOSITION_IF_NOT_THEN,
	PREPOSITION_IF_THEN_NOT,
	PREPOSITION_IF_NOT_THEN_NOT
} from '../../constants';

export default {
	props: {
		preposition: {
			type: Preposition,
			default: function () {
				return new Preposition();
			}
		}
	},
	computed: {
		prepositionDescription: function() {
			let k = 0;
			const self = this;

			return this.preposition.type.label_full.replace(/%s/g, () => {
				let response;

				if (self.preposition.statements[k].truth_value === true) {
					response = self.preposition.statements[k++].description;
				} else {
					response = self.preposition.statements[k++].description;
				}

				return response;
			});
		}
	}
}
</script>
