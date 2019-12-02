<template>
	<div class="container-app">
		<div class="container-main-actions">
			<create-statement-button></create-statement-button>
			<create-argument-button></create-argument-button>
		</div>
		<div class="container-modal-collection">
			{{ activeModal }}
		</div>
	</div>
</template>

<style src='./app.css'></style>

<script>
import Vue from 'vue';
import { EventBus } from './../event-bus';
import isEmpty from 'lodash/isEmpty';

import CreateStatementButton from './workpad/mainActions/create-statement-button.vue';
import CreateArgumentButton from './workpad/mainActions/create-argument-button.vue';

export default {
	components: {
		CreateStatementButton,
		CreateArgumentButton
	},
	data: function() {
		return {
			activeModal: null
		};
	},
	created: function() {
		EventBus.$on('open-modal', this.openModal);
	},
	beforeDestroy: function() {
		EventBus.$off('open-modal', this.openModal);
	},
	methods: {
		openModal: function(data) {
			console.log('modal data:', data);
			if (!isEmpty(data.modalName)) {
				this.activeModal = data.modalName;
			}
		}
	}
};

</script>