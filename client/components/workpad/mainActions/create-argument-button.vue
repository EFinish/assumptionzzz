<template>
	<div>
	    <button type="button" class="main-action-button" :click="log()">Create Argument</button>
	</div>
</template>

<style src='./main-actions.css'></style>

<script>
export default {
	methods: {
        log: () => {
            console.log("LOG!");
        }
    }
};

</script>