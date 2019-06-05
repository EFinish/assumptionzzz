<template>
  	<div class="container-app">
		<div class="container-group">
			<statement-create></statement-create>
		</div>
		<div class="container-group">
			<stack :stack="stack"></stack>
		</div>
	</div>
</template>

<style src='./app.css'></style>

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
		EventBus.$on('stack-add', this.addToStack);
		EventBus.$on('stack-modify-statement', this.modifyStackStatement);
	},
	beforeDestroy: function () {
		EventBus.$off('stack-add', this.addToStack);
	},
	methods: {
		addToStack: function (data) {
			const wow = new Statement(data);
			this.stack.push(wow);
		},
		modifyStackStatement: function (statementId, data) {
			//todo write this more efficiently
			for (let i = 0; i < this.stack.length; i++) {
				// console.log("check?", i, statementId, this.stack[i].id);
				if (this.stack[i].id === statementId) {
					const newStatementData = this.stack[i].toObject();

					Object.keys(data).forEach(function (property) {
						newStatementData[property] = data[property];
					});

					this.stack[i] = new Statement(newStatementData);
				}
			}
		}
	}
};

</script>