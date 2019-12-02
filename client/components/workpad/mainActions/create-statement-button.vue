<template>
	<div>
	    <button type="button" :click="log">Create Statement</button>
	</div>
</template>

<script>
export default {
	methods: {
        log: () => {
            console.log("LOG!");
        }
    }
};

</script>