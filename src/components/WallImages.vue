<template>
    <section>
        <div class="wall-images-header">
            <h2>Muro de Imagenes</h2>
            <button>Subir</button>
        </div>
        <InfiniteScroll />
    </section>
</template>

<script setup lang="ts">
import InfiniteScroll from '../components/InfiniteScroll.vue'
</script>

<style lang="scss">
.wall-images-header {
    display: flex;
    justify-content: space-between;
    align-items: center
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
</style>