<template>
  	<div class="container-app">
		<div class="container-group">
			<statement-create></statement-create>
			<statement-stack :statement_stack="statement_stack"></statement-stack>
		</div>
		<div class="container-group">
			<preposition-create :preposition_types="preposition_types" :statement_stack="statement_stack"></preposition-create>
			<preposition-stack :preposition_stack="preposition_stack"></preposition-stack>
		</div>
	</div>
</template>

<style src='./app.css'></style>

<script>
import { EventBus } from './../event-bus';

import { Statement } from '../domain/statement'; 
import { PrepositionType } from '../domain/preposition-type';

import StatementCreate from './input/statement-create.vue';
import PrepositionCreate from './input/preposition-create.vue';
import StatementStack from './display/statement-stack.vue';
import PrepositionStack from './display/preposition-stack.vue';

import {
	PREPOSITION_THIS,
	PREPOSITION_IF_THEN,
	PREPOSITION_IF_NOT_THEN,
	PREPOSITION_IF_THEN_NOT,
	PREPOSITION_IF_NOT_THEN_NOT,
	PREPOSITION_LABEL_THIS,
	PREPOSITION_LABEL_IF_THEN,
	PREPOSITION_LABEL_IF_NOT_THEN,
	PREPOSITION_LABEL_IF_THEN_NOT,
	PREPOSITION_LABEL_IF_NOT_THEN_NOT
} from '../constants';

export default {
	components: {
		StatementCreate,
		StatementStack,
		PrepositionStack,
		PrepositionCreate
	},
	data: function () {
		return {
			statement_stack: [],
			preposition_stack: [],
			preposition_types: [
				new PrepositionType({
					id: 0,
					value: PREPOSITION_THIS,
					label: PREPOSITION_LABEL_THIS,
					amount_statements: 1
				}),
				new PrepositionType({
					id: 1,
					value: PREPOSITION_IF_THEN,
					label: PREPOSITION_LABEL_IF_THEN,
					amount_statements: 2
				}),
				new PrepositionType({
					id: 2,
					value: PREPOSITION_IF_NOT_THEN,
					label: PREPOSITION_LABEL_IF_NOT_THEN,
					amount_statements: 2
				}),
				new PrepositionType({
					id: 3,
					value: PREPOSITION_IF_THEN_NOT,
					label: PREPOSITION_LABEL_IF_THEN_NOT,
					amount_statements: 2
				}),
				new PrepositionType({
					id: 5,
					value: PREPOSITION_IF_NOT_THEN_NOT,
					label: PREPOSITION_LABEL_IF_NOT_THEN_NOT,
					amount_statements: 2
				})
			]
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