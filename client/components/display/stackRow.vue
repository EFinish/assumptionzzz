<template>
	<div class="stack-row">
		<div class="stack-row-description">{{ statement.description }}</div>
		<div class="stack-row-truth">
			True?:
			<span v-if="statement.truth_value" class="stack-row-value-pass">TRUE</span>
			<span v-else class="stack-row-value-fail">FALSE</span>
		</div>
		<div class="stack-row-valid">
			Valid?: 
			<span v-if="statement.valid_value" class="stack-row-value-pass">VALID</span>
			<span v-else class="stack-row-value-fail">INVALID</span>
		</div>
	</div>
</template>

<style src='./stackRow.css'></style>

<script>
import { Statement } from '../../domain/statement'; 

export default {
	props: {
		statement: {
			type: Statement,
			default: function () {
				return new Statement();
			}
		}
	}
}
</script>
