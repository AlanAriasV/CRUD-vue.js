<template>
	<main>
		<WallImages />
		<Categories />
	</main>
</template>
<script setup lang="ts">
import WallImages from '../components/WallImages.vue';
import Categories from '../components/Categories.vue';
</script>
<style lang="scss">
main {
	height: 1fr;
	padding: 0px 20px 20px;
	display: grid;
	grid-template-columns: 80% 20%;
	gap: 10px;
}

section {
	background-color: rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	padding: 10px 20px;
	box-sizing: border-box;
}
</style>
