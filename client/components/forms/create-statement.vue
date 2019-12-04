<template>
    <div class="container-form">
        <div class="group-input">
            <label for="statement">Description</label>
            <input type="text" id="statement" v-model="form.description">
        </div>
        <div class="group-input">
            <label for="statement">Truth Value</label>
            <input type="checkbox" id="statement" v-model="form.truth_value">
        </div>
        <div class="group-input">
            <label for="statement">Commentary</label>
            <input type="text" id="statement" v-model="form.commentary">
        </div>
        <div class="group-input">
            <button type="button" @click="submit">Create</button>
        </div>
    </div>
</template>

<script>
    import { EventBus } from '../../event-bus';

    import StatementService from '../../services/StatementService.js';
    
    export default {
        data: function() {
            return {
                form: {
                    description: null,
                    truth_value: null,
                    commentary: null
                }
            };
        },
        methods: {
            submit: async function() {
                const data = this.form;

                const statementService = new StatementService();

                const response = await statementService.createStatement(data);
                // createStatement(data).then(async (response) => {
                //     console.log('create statement response: ', response);
                // })
                // EventBus.$emit('success-notification', 'Form submitted successfully!');
            }            
        }
    };
</script>