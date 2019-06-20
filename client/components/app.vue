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
import Vue from 'vue';
import { EventBus } from './../event-bus';

import { Statement } from '../domain/statement'; 
import { Preposition } from '../domain/preposition'; 
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
					id: 1,
					value: PREPOSITION_THIS,
					label: PREPOSITION_LABEL_THIS,
					label_full: '%s',
					amount_statements: 1
				}),
				new PrepositionType({
					id: 2,
					value: PREPOSITION_IF_THEN,
					label: PREPOSITION_LABEL_IF_THEN,
					label_full: 'IF %s THEN %s',
					amount_statements: 2
				}),
				new PrepositionType({
					id: 3,
					value: PREPOSITION_IF_NOT_THEN,
					label: PREPOSITION_LABEL_IF_NOT_THEN,
					label_full: 'IF NOT %s THEN %s',
					amount_statements: 2
				}),
				new PrepositionType({
					id: 4,
					value: PREPOSITION_IF_THEN_NOT,
					label: PREPOSITION_LABEL_IF_THEN_NOT,
					label_full: 'IF %s THEN NOT %s',
					amount_statements: 2
				}),
				new PrepositionType({
					id: 5,
					value: PREPOSITION_IF_NOT_THEN_NOT,
					label: PREPOSITION_LABEL_IF_NOT_THEN_NOT,
					label_full: 'IF NOT %s THEN NOT %s',
					amount_statements: 2
				})
			]
		};
	},
	created: function() {
		EventBus.$on('statement-stack-add', this.addToStatementStack);
		EventBus.$on('stack-modify-statement', this.modifyStackStatement);
		EventBus.$on('preposition-stack-add', this.addToPrepositionStack);
	},
	beforeDestroy: function () {
		EventBus.$off('statement-stack-add', this.addToStatementStack);
		EventBus.$off('stack-modify-statement', this.modifyStackStatement);
		EventBus.$off('preposition-stack-add', this.addToPrepositionStack);
	},
	methods: {
		addToStatementStack: function (data) {
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

					Vue.set(this.statement_stack, i, new Statement(newStatementData));
				}
			}
		},
		addToPrepositionStack: function (data) {
			console.log('add to preposition stack');
			this.preposition_stack.push(new Preposition(data));
			console.log('FAT ASS NIGGA', this.preposition_stack);
		}
	}
};

</script>