<template>
	<div class="images">
		<div class="grid-container">
			<div class="grid-item" v-for="post in postsList">
				<Post :imgId="post.id" :imgSrc="post.thumbnail" :imgUpVotes="post.price" :imgDownVotes="post.stock" />
			</div>
			<div id="scroll-trigger" />
			<div class="circle-loader" v-if="showLoader" />
		</div>
	</div>
</template>

<script setup lang="ts">
import Post from '../components/Post.vue';
</script>

<script lang="ts">
import { ref } from 'vue';
import getPosts from '../api/getPosts.ts';

export default {
	data: () => {
		return {
			currentPage: 1,
			maxPerPage: 12,
			showLoader: false,
			postsList: ref(
				<
				{
					id: string;
					thumbnail: string;
					price: string;
					stock: string;
				}[]
				>(<unknown>[])
			),
		};
	},
	computed: {},
	methods: {
		pageOffset() {
			return this.maxPerPage * this.currentPage;
		},
		async getMorePosts() {
			const newPosts = await getPosts(
				this.maxPerPage,
				this.postsList.length
			);
			this.postsList.push(...newPosts);
		},

		scrollTrigger() {
			const observer = new IntersectionObserver(
				entries => {
					entries.forEach(entry => {
						if (entry.isIntersecting && !this.showLoader) {
							this.showLoader = true;
							this.getMorePosts().then(_ => {
								this.showLoader = false;
							});
						}
					});
				},
				{
					rootMargin: '0px',
					threshold: [0.5, 0],
				}
			);

			observer.observe(document.querySelector('#scroll-trigger')!);
		},
	},
	mounted() {
		this.scrollTrigger();
	},
};
</script>

<style scoped lang="scss">
// arreglar tamaño
$scrollbar-border: 12px;

.images {
	position: relative;
}

.grid-container {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	position: absolute;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	height: 100%;
	width: 100%;
	gap: 10px;
	box-sizing: border-box;
	padding: 0px 5px;
	overflow-x: hidden;
	overflow-y: scroll;
}

.grid-item {
	display: flex;
	position: relative;
	max-height: 350px;
}

.grid-item .grid-container::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
	background-color: transparent;
}

.grid-container::-webkit-scrollbar {
	width: $scrollbar-border;
	background-color: transparent;
}

.grid-container::-webkit-scrollbar-thumb {
	border-radius: $scrollbar-border;
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
	background-color: #fff;
}

#scroll-trigger {
	height: 50px;
}

.circle-loader {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 5px solid rgba(255, 255, 255, 0.2);
	border-top: 5px solid #fff;
	animation: loading 1.5s infinite linear;
}

@keyframes loading {
	0% {
		transform: translate(-50%, -50%) rotate(0deg);
	}

	100% {
		transform: translate(-50%, -50%) rotate(360deg);
	}
}
</style>
