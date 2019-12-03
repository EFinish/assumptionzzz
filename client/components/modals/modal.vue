<template>
    <div class="container-modal" v-show="active">
        <div class="container-modal-guts">
            <div class="container-modal-title">
                {{ title }}
                <button class="modal-title-close-button" type="button" @click="close()">X</button>
            </div>
            <div class="container-modal-alerts">
                <span v-if="error" class="modal-alert alert-danger">{{notificationMessage}}</span>
                <span v-if="success" class="modal-alert alert-success">{{notificationMessage}}</span>
                <span v-if="info" class="modal-alert alert-info">{{notificationMessage}}</span>
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
            error: function() {
                return (!isEmpty(this.notification) && this.notification.type == 'error');
            },
            success: function() {
                return (!isEmpty(this.notification) && this.notification.type == 'success');
            },
            info: function() {
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
            close() {
                EventBus.$emit('close-modal');
            }            
        }
    };
</script>