<template>
	<div class="container-app">
		<div class="container-modal-overlay">
			<div class="container-main-actions">
				<create-statement-button></create-statement-button>
				<create-argument-button></create-argument-button>
			</div>
		</div>
		<modal :active="modal.active" :component="modal.component" :title="modal.title"></modal>
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
		EventBus.$on('close-modal', this.closeModal);
	},
	beforeDestroy: function() {
		EventBus.$off('open-modal', this.openModal);
		EventBus.$off('close-modal', this.closeModal);
	},
	methods: {
		openModal: function(component, title) {
			console.log('modal data:', component, title);

			this.modal.component = component;
			this.modal.title = title;
			this.modal.active = true;
		},
		closeModal: function() {
			this.modal.active = false;
		}
	}
};

</script>