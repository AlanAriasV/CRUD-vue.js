<template>
	<section>
		<div class="wall-images-header">
			<h2>Muro de Imágenes</h2>
			<button @click="openModal">Subir</button>
		</div>
		<InfiniteScroll />
	</section>
	<Transition>
		<ModalUpload
			v-if="show"
			@close="closeModal"
		/>
	</Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ModalUpload from './ModalUpload.vue';
import InfiniteScroll from '../components/InfiniteScroll.vue';

const show = ref(false);
const openModal = () => {
	show.value = true;
};
const closeModal = () => {
	show.value = false;
};
</script>

<style lang="scss">
section {
	display: grid;
	grid-template-rows: min-content 1fr;
}

.wall-images-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

button {
	outline: 0;
	border: 2px solid white;
	background: none;
	padding: 10px 35px;
	font-family: var(--font);
	font-size: 15px;
	cursor: pointer;
	border-radius: 15px;
	transition: all 0.3s ease;
	text-align: center;
	color: #fff;

	&:active {
		background: rgba(255, 255, 255);
		border-color: rgba(0, 0, 0, 0.2);
		color: #000000;
	}

	&:hover {
		background: rgba(255, 255, 255);
		border-color: rgba(0, 0, 0, 0.2);
		color: #000000;
	}
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
