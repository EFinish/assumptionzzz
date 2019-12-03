<template>
    <div class="container-form">
        <div class="group-input">
            <label for="statement">Statement</label>
            <input type="text" id="statement">
        </div>
        <div class="group-input">
            <button type="button" @click="submit">Create</button>
        </div>
    </div>
</template>

<script>
    import { EventBus } from '../../event-bus'
    
    export default {
         methods: {
            submit() {
                EventBus.$emit('success-notification', 'Form submitted successfully!');
            }            
        }
    };
</script>