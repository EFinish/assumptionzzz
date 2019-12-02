<template>
	<div class="container-app">
		<div class="container-main-actions">
			<create-statement-button></create-statement-button>
			<create-argument-button></create-argument-button>
		</div>
		<div class="container-modal-collection">
			<modal :active="modal.active" :component="modal.component"></modal>
		</div>
	</div>
</template>

<style src='./app.css'></style>

<script>
import Vue from 'vue';
import { EventBus } from './../event-bus';

import Modal from './modals/modal.vue';
import CreateStatementButton from './workpad/mainActions/create-statement-button.vue';
import CreateArgumentButton from './workpad/mainActions/create-argument-button.vue';

export default {
	components: {
		CreateStatementButton,
		CreateArgumentButton,
		Modal
	},
	data: function() {
		return {
			modal: {
                component: null,
                active: false,
            }
		};
	},
	created: function() {
		EventBus.$on('open-modal', this.openModal);
	},
	beforeDestroy: function() {
		EventBus.$off('open-modal', this.openModal);
	},
	methods: {
		openModal: function(component) {
			console.log('modal data:', component);

			this.modal.component = component;
			this.modal.active = true;
		}
	}
};

</script>