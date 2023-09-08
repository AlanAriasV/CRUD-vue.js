<template>
    <img :src=data.imgSrc class="thumbnail">
    <div class="image-footer">
        <div class="vote-container">
            <i @click="voteUp" class="pi pi-arrow-circle-up upvote" /> <span> {{ data.imgUpVotes }}</span>
        </div>
        <div class="vote-container">
            <i @click="voteDown" class="pi pi-arrow-circle-down downvote" /> <span> {{ data.imgDownVotes }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
const data = defineProps(['imgId', 'imgSrc', 'imgUpVotes', 'imgDownVotes']);

function voteUp() {
    console.log("Votar positivo img: ", data.imgId);
}

function voteDown() {
    console.log("Votar negativo img: ", data.imgId);
}
</script>

<style lang="scss">
.thumbnail {
    border-radius: 10px;
    width: 100%;
    max-height: 250px;
    object-fit: cover;
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