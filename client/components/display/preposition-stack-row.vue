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
		prepositionDescription: () => {
			let description;

			switch (this.preposition.type) {
				case PREPOSITION_THIS:
					description = this.preposition.statements[0].description
					break;
				case PREPOSITION_IF_THEN:
					description = `If ${this.preposition.statements[0]}, then ${this.preposition.statements[1]}`
					break;
				case PREPOSITION_IF_NOT_THEN:
					description = `If NOT ${this.preposition.statements[0]}, then ${this.preposition.statements[1]}`
					break;
				case PREPOSITION_IF_THEN_NOT:
					description = `If ${this.preposition.statements[0]}, then NOT ${this.preposition.statements[1]}`
					break;
				case PREPOSITION_IF_NOT_THEN_NOT:
					description = `If NOT ${this.preposition.statements[0]}, then NOT ${this.preposition.statements[1]}`
					break;
				default:
					description = `Something is HORRIBLY wrong, how EMBARRASSING`;
					break;
			}

			return description;
		}
	},
	methods: {}
}
</script>
