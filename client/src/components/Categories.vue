<template>
    <section>
        <h2>Categorías</h2>
        <div class="categories-container">
            <div class="category">
                <h3>Paisajes</h3>
            </div>
            <div class="category">
                <h3>Fotorealista</h3>
            </div>
            <div class="category">
                <h3>Ciencia ficción</h3>
            </div>
            <div class="category">
                <h3>Personajes</h3>
            </div>
            <div class="category">
                <h3>3D</h3>
            </div>
            <div class="category">
                <h3>Animales</h3>
            </div>
        </div>
    </section>
</template>

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