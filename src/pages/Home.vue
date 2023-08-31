<template>
	<div>
		{{ algo }}
	</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

// defineProps<{ msg: string }>();

const algo = ref('<div>Hola</div>');
</script>
<style scoped lang="scss"></style>
