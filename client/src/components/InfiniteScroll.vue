<template>
	<div
		class="grid-container"
		id="1"
	>
		<div
			class="grid-item"
			v-for="post in postsList"
		>
			<Post
				:imgId="post._id"
				:imgSrc="post.img"
				:imgDownVotes="post.downVotes"
				:imgUpVotes="post.upVotes"
			/>
		</div>
		<div id="scroll-trigger" />
		<div
			class="circle-loader"
			v-if="showLoader"
		/>
	</div>
</template>

<script setup lang="ts">
import Post from '../components/Post.vue';
</script>

<script lang="ts">
import { ref } from 'vue';
import { getPosts } from '../api/api';
('../api/api.ts');

export default {
	data: () => {
		return {
			currentPage: 1,
			maxPerPage: 8,
			showLoader: false,
			postsList: ref(
				<
					{
						_id: string;
						_v: number;
						createdAd: string;
						downVotes: number;
						img: string;
						tag: string;
						updatedAt: string;
						upVotes: number;
					}[]
				>[]
			),
		};
	},
	computed: {},
	methods: {
		pageOffset() {
			return this.maxPerPage * this.currentPage;
		},
		async getMorePosts() {
			const { data: newPosts } = await getPosts();
			console.log('newPosts');
			console.log(newPosts);
			// this.maxPerPage,
			// this.postsList.length
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

.grid-container {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	height: 600px;
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
../api/api.ts
