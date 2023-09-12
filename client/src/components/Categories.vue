<template>
	<section>
		<h2>Categorías</h2>
		<div class="categories-container">
			<div
				@click="deleteCategory"
				class="category"
			>
				<h3>Todos</h3>
			</div>
			<div
				@click="setCategory('Paisajes')"
				class="category"
			>
				<h3>Paisajes</h3>
			</div>
			<div
				@click="setCategory('FotoRealista')"
				class="category"
			>
				<h3>FotoRealista</h3>
			</div>
			<div
				@click="setCategory('Ciencia ficción')"
				class="category"
			>
				<h3>Ciencia ficción</h3>
			</div>
			<div
				@click="setCategory('Personajes')"
				class="category"
			>
				<h3>Personajes</h3>
			</div>
			<div
				@click="setCategory('3D')"
				class="category"
			>
				<h3>3D</h3>
			</div>
			<div
				@click="setCategory('Animales')"
				class="category"
			>
				<h3>Animales</h3>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
function setCategory(category: string) {
	localStorage.setItem('tag', category);
	location.reload();
}

function deleteCategory() {
	localStorage.removeItem('tag');
	location.reload();
}
</script>

<style scoped lang="scss">
.categories-container {
	background-color: rgba(0, 0, 0, 0.1);
	display: flex;
	gap: 5px;
	padding: 5px;
	border-radius: 5px;
	flex-direction: column;
}

.category {
	background-color: rgba(0, 0, 0, 0.05);
	border-radius: 5px;
	padding: 5px 20px;
	justify-self: center;

	&:hover {
		background-color: rgba(255, 255, 255, 0.9);
		color: rgba(0, 0, 0, 0.9);
		cursor: pointer;
	}

	&.active {
		background-color: rgba(255, 255, 255, 0.9);
		color: rgba(0, 0, 0, 0.9);
		cursor: pointer;
	}
}
</style>
