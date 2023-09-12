<template>
	<Header />
	<hr />
	<Home />
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Home from './views/Home.vue';
</script>
<style scoped lang="scss">
hr {
	width: 1fr;
	height: 0;
	margin: 0;
	padding: 0;
	border-color: black;
	align-self: center;
}
</style>
