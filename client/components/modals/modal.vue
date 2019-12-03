<template>
    <div class="container-modal" v-show="active">
        <div class="container-modal-guts">
            <div class="container-modal-title">
                {{ title }}
                <button class="modal-title-close-button" type="button" @click="close">X</button>
            </div>
            <div class="container-modal-alerts">
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
            <component v-if="component" v-bind:is="component"></component>
        </div>
    </div>
</template>

<style src='./modal.css'></style>

<script>
    import isEmpty from 'lodash/isEmpty';

    import { EventBus } from '../../event-bus';

    import CreateStatement from '../forms/create-statement.vue';

    export default {
        components: {
            CreateStatement
        },
        props: {
            active: {
                type: Boolean,
                default: function () {
                    return false;
                }
            },
            component: {
                type: String,
                default: function () {
                    return null;
                }
            },
            title: {
                type: String,
                default: function() {
                    return null;
                }
            },
            notification: {
                type: Object,
                default: function () {
                    return null;
                }
            },
        },
        computed: {
            hasNotificationError: function() {
                return (!isEmpty(this.notification) && this.notification.type == 'error');
            },
            hasNotificationSuccess: function() {
                return (!isEmpty(this.notification) && this.notification.type == 'success');
            },
            hasNotificationInfo: function() {
                return (!isEmpty(this.notification) && this.notification.type == 'info');
            },
            notificationMessage: function() {
                if (isEmpty(this.notification)) {
                    return null;
                }

                return this.notification.message;
            },
        },
        methods: {
            close: function() {
                EventBus.$emit('close-modal');
            },
            closeNotification: function() {
                EventBus.$emit('close-notification');
            }       
        }
    };
</script>