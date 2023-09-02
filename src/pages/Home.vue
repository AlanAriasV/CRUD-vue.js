<template>
	<main>
		<section>
			<h2>Muro de Imagenes</h2>
		</section>
		<section>
			<h2>Categorías</h2>
			<div class="categories-container">
				<div class="category">
					<h3>Paisajes</h3>
				</div>
				<div class="category">
					<h3>Fotografía</h3>
				</div>
				<div class="category">
					<h3>Fotorealista</h3>
				</div>
				<div class="category">
					<h3>Ciencia ficción</h3>
				</div>
			</div>
		</section>
	</main>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
main {
	padding: 0px 20px 20px ;
	display: grid;
	grid-template-rows: 1fr 0.5fr;
	gap: 10px;
}

section {
	background-color: rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	padding: 10px 20px;
}
.categories-container {
	background-color: rgba(0, 0, 0, 0.1);
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: 1fr;
	gap: 20px;
}
.category {
	background-color: rgba(0, 0, 0, 0.05);
	border-radius: 5px;
	padding: 5px 20px;
	justify-self: center;
}
</style>
