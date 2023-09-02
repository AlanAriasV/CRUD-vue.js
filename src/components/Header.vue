<template>
    <header>
        <img src="/logo.png" alt="logo">
        <nav>
            <a href="">Subir imagen</a>
        </nav>
    </header>
</template>

<script lang="ts">
export default {
	name: 'Header',
};
</script>

<style scoped lang="scss">
img {
    max-height: 100%;
}

header{
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
}
</style>