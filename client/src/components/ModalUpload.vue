<template>
    <div class="modal-container">
        <div class="modal-background" @click="$emit('close')" />
        <div class="modal-content">
            <div class="modal-header">
                <h1>Subir imagen</h1>
            </div>
            <div class="modal-body">
                <div class="category-container">
                    <div class="selector">
                        <select v-model="selectedCategory">
                            <option selected disabled>Seleccione una categoría</option>
                            <option v-for="category in categories" :value="category">
                                {{ category }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="upload-container">
                    <form method="post" action="" enctype="multipart/form-data">
                        <input type="file" name="file" id="file" @change="onFileChange" />
                        <label for="file">
                            <div v-if="!url" class="img-placeholder">
                                <i class="pi pi-image" />
                                <p>Arrasta la imagen aquí o presiona para buscar</p>
                            </div>
                            <div v-else class="img-preview">
                                <img :src="url" alt="preview">
                                <i class="pi pi-image" />
                            </div>
                        </label>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-cancel" @click="$emit('close')">
                    <i class="pi pi-delete-left"></i>
                    <p>Cancelar</p>
                </button>
                <button class="btn-accept" @click="upload" :disabled="!url">
                    <i class="pi pi-upload"></i>
                    <p>Subir</p>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { uploadPost } from '../api/api';

const url = ref<string>();
const base64 = ref<string>();
const selectedCategory = ref<string>("Seleccione una categoría");
const categories = ["Paisajes", "Fotorealista", "Ciencia Ficción", "Personajes", "3D", "Animales"];

function onFileChange(e: Event) {
    const file = e.target.files[0];
    url.value = URL.createObjectURL(file);
    toBase64(file);
}

function upload() {
    // const file = e.target.files[0];
    if (base64.value) {
        // console.log(base64.value);
        return uploadPost(base64.value);
    }
    console.log('subir ', url.value);
}

function toBase64(file: Blob) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        base64.value = reader.result!.toString();
    };
}
</script>

<style lang="scss">
.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
}

.modal-background {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
}

.modal-content {
    position: absolute;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(24, 24, 26);
    width: 20%;
    height: 40%;
    padding: 50px;
    border-radius: 5px;
    font-family: var(--font);
}

.modal-body {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: min-content 1fr;
    gap: 15px;
}

.category-container {
    display: flex;
    width: 100%;
    height: 30px;
}

select {
    /* Reset Select */
    appearance: none;
    outline: 10px red;
    border: none;
    box-shadow: none;
    /* Personalize */
    flex: 1;
    padding: 0 1em;
    color: #fff;
    background-color: rgb(22, 22, 22);
    cursor: pointer;
    font-family: var(--font);
}


.selector {
    position: relative;
    display: flex;
    width: 100%;
    height: 2em;
    border-radius: .25em;
    overflow: hidden;

    &::after {
        content: '\25BC';
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.5em;
        background-color: rgba(165, 165, 165, 0.1);
        pointer-events: none;
    }
}

.upload-container {
    position: relative;
    height: 100%;
    width: 100%;
    border: dashed 1px rgba(0, 0, 0, 0.1);
    object-fit: cover;

    form {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    input {
        display: none;
    }

    i {
        font-size: 2rem;
    }

    label {
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        font-size: 1rem;
        height: 100%;
    }

    .img-preview {

        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;

        img {
            width: 100%;
            object-fit: cover;
            object-position: center center;
        }

        i {
            opacity: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            text-align: center;
        }

        &:hover img {
            opacity: 0.3;
        }

        &:hover i {
            opacity: 1;
        }
    }
}

.modal-footer {
    display: flex;
    gap: 50px;

    button {
        display: flex;
        align-items: center;
        gap: 5px;

        &:disabled {
            color: grey;
            border-color: grey;

            &:hover {
                background: none;
                cursor: default;
            }
        }
    }
}
</style>
