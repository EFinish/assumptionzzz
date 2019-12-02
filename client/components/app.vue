<template>
	<div class="container-app">
		<div class="container-main-actions">
			main-actions
			<create-statement-button></create-statement-button>
			<create-argument-button></create-argument-button>
		</div>
	</div>
</template>

<style src='./app.css'></style>

<script>
import Vue from 'vue';
import { EventBus } from './../event-bus';

import CreateStatementButton from './workpad/mainActions/create-statement-button.vue';
import CreateArgumentButton from './workpad/mainActions/create-argument-button.vue';

export default {
	components: {
		CreateStatementButton,
		CreateArgumentButton
	},
	data: function () {
		return {};
	},
	created: function() {},
	beforeDestroy: function () {},
	methods: {}
};

</script>