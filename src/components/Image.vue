<template>
	<div class="container">
		<img
			:src="img"
			:alt="alt"
		/>
		<h2 class="title">{{ title }}</h2>
	</div>
</template>
<script lang="ts">
export default {
	name: 'Image',
	props: {
		img: String,
		alt: String,
		title: String,
	},
};
</script>
<style scoped lang="scss"></style>
