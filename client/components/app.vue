<template>
  	<div>
		<div>
			<p>assumptionzzz ass</p>
			<statement-create></statement-create>
		</div>
		<div>
			<stack :stack="stack"></stack>
		</div>
	</div>
</template>


<script>
import { EventBus } from './../event-bus';
import { Statement } from '../domain/statement'; 
import StatementCreate from './input/statement-create.vue';
import Stack from './display/stack.vue';

export default {
	components: {
		StatementCreate,
		Stack
	},
	data: function () {
		return {
			stack: []
		};
	},
	created: function() {
		EventBus.$on('add-to-stack', this.addToStack);
	},
	methods: {
		addToStack: function (data) {
			const wow = new Statement(data);
			this.stack.push(wow);
		}
	}
};

</script>