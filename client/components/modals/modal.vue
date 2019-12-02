<template>
    <div class="container-modal" v-show="active">
        <div class="container-modal-guts">
        MODAL: {{component}}
            <component v-if="component" v-bind:is="component" v-bind="context"></component>
        </div>
    </div>
</template>

<style src='./modal.css'></style>

<script>
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
        },
        methods: {
            close() {
            }            
        }
    };
</script>