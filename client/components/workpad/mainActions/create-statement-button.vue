<template>
	<button type="button" class="main-action-button" @click="submit">Create Statement</button>
</template>

<style src='./main-actions.css'></style>

<script>
import { EventBus } from '../../../event-bus'

export default {
	methods: {
        submit: function() {
			EventBus.$emit('open-modal', { modalName: 'create-statement-modal' });
		}
    }
};

</script>