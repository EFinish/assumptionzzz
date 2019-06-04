<template>
	<div>
		<div>{{ statement.description }}</div>
		<div>True?: {{ statement.truth_value }}</div>
		<div>Valid?: {{ statement.valid_value }}</div>
	</div>
</template>

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
