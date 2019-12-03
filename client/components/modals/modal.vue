<template>
    <div class="container-modal" v-show="active">
        <div class="container-modal-guts">
            <div class="container-modal-title">
                {{ title }}
                <button class="modal-title-close-button" type="button" @click="close()">X</button>
            </div>
            <component v-if="component" v-bind:is="component"></component>
        </div>
    </div>
</template>

<style src='./modal.css'></style>

<script>
    import { EventBus } from '../../event-bus'

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
            }
        },
        methods: {
            close() {
                EventBus.$emit('close-modal');
            }            
        }
    };
</script>