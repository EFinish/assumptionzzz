<template>
	<div class="stack-row">
		<div class="stack-row-description">{{ statement.description }}</div>
		<div class="stack-row-truth">
			<button type="button" @click="switchStatementTruth">True?:</button>
			<span v-if="calcTruthValue" class="stack-row-value-pass">TRUE</span>
			<span v-else class="stack-row-value-fail">FALSE</span>
		</div>
		<div class="stack-row-valid">
			Valid?: 
			<span v-if="statement.valid_value" class="stack-row-value-pass">VALID</span>
			<span v-else class="stack-row-value-fail">INVALID</span>
		</div>
	</div>
</template>

<style src='./stack-row.css'></style>

<script>
import { EventBus } from '../../event-bus';
import { Statement } from '../../domain/statement'; 

export default {
	props: {
		statement: {
			type: Statement,
			default: function () {
				return new Statement();
			}
		}
	},
	methods: {
		switchStatementTruth: function () {
			console.log('switch', this.statement.truth_value);
			EventBus.$emit('stack-modify-statement', this.statement.id, { truth_value: !this.statement.truth_value });
		},
		calcTruthValue: function () {
			// console.log('getValue????');
			// return true;
			return this.statement.truth_value;
			// return this.statement ? true : false;
		},
	}
}
</script>
