<template>
  	<div class="container-app">
		<div class="container-group">
			<statement-create></statement-create>
			<statement-stack :statement_stack="statement_stack"></statement-stack>
		</div>
		<div class="container-group">
			<preposition-stack :preposition_stack="preposition_stack"></preposition-stack>
		</div>
	</div>
</template>

<style src='./app.css'></style>

<script>
import { EventBus } from './../event-bus';
import { Statement } from '../domain/statement'; 
import StatementCreate from './input/statement-create.vue';
import StatementStack from './display/statement-stack.vue';
import PrepositionStack from './display/preposition-stack.vue';

export default {
	components: {
		StatementCreate,
		StatementStack,
		PrepositionStack
	},
	data: function () {
		return {
			statement_stack: [],
			preposition_stack: []
		};
	},
	created: function() {
		EventBus.$on('statement-stack-add', this.addToStatementStack);
		EventBus.$on('stack-modify-statement', this.modifyStackStatement);
	},
	beforeDestroy: function () {
		EventBus.$off('statement-stack-add', this.addToStatementStack);
		EventBus.$off('stack-modify-statement', this.modifyStackStatement);
	},
	methods: {
		addToStatementStack: function (data) {
			console.log("dude", data);
			this.statement_stack.push(new Statement(data));
		},
		modifyStackStatement: function (statementId, data) {
			//todo write this more efficiently
			for (let i = 0; i < this.statement_stack.length; i++) {
				if (this.statement_stack[i].id === statementId) {
					const newStatementData = this.statement_stack[i].toObject();

					Object.keys(data).forEach(function (property) {
						newStatementData[property] = data[property];
					});

					this.statement_stack[i] = new Statement(newStatementData);
				}
			}
		}
	}
};

</script>