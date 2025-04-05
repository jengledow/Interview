<script setup>
	import { ref } from 'vue';

	const count = ref(0);

	function add(){
		count.value++;
	}
</script>

<template>
	<h2>{{ count }}</h2>
	<button @click="add">Click Me</button>
</template>