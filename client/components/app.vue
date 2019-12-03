<template>
	<div class="container-app">
		<div class="container-modal-overlay">
			<div class="container-main-actions">
				<create-statement-button></create-statement-button>
				<create-argument-button></create-argument-button>
			</div>
		</div>
		<modal :active="modal.active" :component="modal.component" :title="modal.title" :notification="notification"></modal>
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
            },
			notification: {
                type: null,
                message: null
            },
		};
	},
	created: function() {
		EventBus.$on('open-modal', this.openModal);
		EventBus.$on('close-modal', this.closeModal);
		EventBus.$on('error-notification', this.errorNotification);
		EventBus.$on('success-notification', this.successNotification);
		EventBus.$on('info-notification', this.infoNotification);
	},
	beforeDestroy: function() {
		EventBus.$off('open-modal', this.openModal);
		EventBus.$off('close-modal', this.closeModal);
		EventBus.$on('error-notification', this.errorNotification);
		EventBus.$on('success-notification', this.successNotification);
		EventBus.$on('info-notification', this.infoNotification);
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
		},
		notify: function(type, message) {
			this.notification = { type, message };
		},
		errorNotification: function (message) {
			this.notify('error', message);
		},
		successNotification: function (message) {
			this.notify('success', message);
		},
		infoNotification: function (message) {
			this.notify('info', message);
		}
	}
};

</script>