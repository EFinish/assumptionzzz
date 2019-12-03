<template>
	<div class="container-app">
		<div class="container-modal-overlay">
			<div class="container-main-actions">
				<create-statement-button></create-statement-button>
				<create-argument-button></create-argument-button>
			</div>
			<div class="container-alerts" v-if="hasNotification">
				<span v-if="hasNotificationError" class="alert-danger">
					{{notificationMessage}}
					<button type="button" @click="closeNotification">X</button>
				</span>
                <span v-if="hasNotificationSuccess" class="alert-success">
					{{notificationMessage}}
					<button type="button" @click="closeNotification">X</button>
				</span>
                <span v-if="hasNotificationInfo" class="alert-info">
					{{notificationMessage}}
					<button type="button" @click="closeNotification">X</button>
				</span>
			</div>
		</div>
		<modal :active="modal.active" :component="modal.component" :title="modal.title" :notification="notification"></modal>
	</div>
</template>

<style src='./app.css'></style>

<script>
import Vue from 'vue';
import isEmpty from 'lodash/isEmpty';

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
		EventBus.$on('close-notification', this.closeNotification);
	},
	beforeDestroy: function() {
		EventBus.$off('open-modal', this.openModal);
		EventBus.$off('close-modal', this.closeModal);
		EventBus.$off('error-notification', this.errorNotification);
		EventBus.$off('success-notification', this.successNotification);
		EventBus.$off('info-notification', this.infoNotification);
		EventBus.$off('close-notification', this.closeNotification);
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
		},
		closeNotification: function() {
			this.notification = {
                type: null,
                message: null
            };
		}
	},
	computed: {
		hasNotification: function () {
			return !isEmpty(this.notification);
		},
		hasNotificationError: function () {
			return this.notification.type === 'error';
		},
		hasNotificationSuccess: function () {
			return this.notification.type === 'success';
		},
		hasNotificationInfo: function () {
			return this.notification.type === 'info';
		},
		notificationMessage: function() {
			if (isEmpty(this.notification)) {
				return null;
			}

			return this.notification.message;
		},
	}
};

</script>