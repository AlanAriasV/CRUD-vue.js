<template>
	<img
		:src="imgSrc"
		class="thumbnail"
	/>
	<div class="image-footer">
		<div class="vote-container">
			<i
				@click="voteUp(imgId)"
				class="pi pi-arrow-circle-up upvote"
			/>
			<span> {{ imgUpVotes }}</span>
		</div>
		<div class="vote-container">
			<i
				@click="voteDown(imgId)"
				class="pi pi-arrow-circle-down downvote"
			/>
			<span> {{ imgDownVotes }}</span>
		</div>
	</div>
	<div
		@click="deletePost(imgId)"
		class="image-header"
	>
		<i class="pi pi-trash"></i>
	</div>
</template>

<script setup lang="ts">
defineProps({
	imgId: {
		type: String,
		required: true,
	},
	imgSrc: {
		type: String,
		required: true,
	},
	imgUpVotes: {
		type: Number,
		required: true,
	},
	imgDownVotes: {
		type: Number,
		required: true,
	},
	deletePost: {
		type: Function,
		required: true,
	},
	voteUp: {
		type: Function,
		required: true,
	},
	voteDown: {
		type: Function,
		required: true,
	},
});
</script>

<style lang="scss">
.thumbnail {
	border-radius: 10px;
	width: 100%;
	object-fit: cover;
}

.image-header {
	display: flex;
	align-items: center;
	position: absolute;
	font-size: 1.3rem;
	font-family: var(--font);
	border-radius: 5px;
	padding: 7px;
	gap: 10px;
	top: 5px;
	right: 5px;
	background-color: rgba(0, 0, 0, 0.4);

	&:hover {
		background-color: var(--red-color);

		.pi {
			animation: zoom-in-zoom-out 1s ease infinite;
		}
	}
}

.image-footer {
	display: flex;
	align-items: center;
	position: absolute;
	font-size: 1.3rem;
	font-family: var(--font);
	border-radius: 5px;
	padding: 3px 7px;
	gap: 10px;
	bottom: 5px;
	left: 5px;
	background-color: rgba(0, 0, 0, 0.4);
}

.vote-container {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;

	.pi:hover {
		animation: zoom-in-zoom-out 1s ease infinite;
		cursor: pointer;

		&.upvote {
			color: var(--green-color);
		}

		&.downvote {
			color: var(--red-color);
		}
	}
}

@keyframes zoom-in-zoom-out {
	0% {
		transform: scale(1, 1);
	}

	50% {
		transform: scale(1.2, 1.2);
	}

	100% {
		transform: scale(1, 1);
	}
}
</style>
