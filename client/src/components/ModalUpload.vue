<template>
	<div class="modal-container">
		<div
			class="modal-background"
			@click="$emit('close')"
		/>
		<div class="modal-content">
			<div class="modal-header">
				<h1>Subir imagen</h1>
			</div>
			<div class="modal-body">
				<div class="upload-container">
					<form
						method="post"
						action=""
						enctype="multipart/form-data"
					>
						<input
							type="file"
							name="file"
							id="file"
							@change="onFileChange"
						/>
						<label for="file">
							<div
								v-if="!url"
								class="img-placeholder"
							>
								<i class="pi pi-image" />
								<p>
									Arrasta la imagen aquí o presiona para
									buscar
								</p>
							</div>
							<div
								v-else
								class="img-preview"
							>
								<img
									:src="url"
									alt="preview"
								/>
								<i class="pi pi-image" />
							</div>
						</label>
					</form>
				</div>
			</div>
			<div class="modal-footer">
				<button
					class="btn-cancel"
					@click="$emit('close')"
				>
					<i class="pi pi-delete-left"></i>
					<p>Cancelar</p>
				</button>
				<button
					class="btn-accept"
					@click="upload"
					:disabled="!url"
				>
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

function onFileChange(e: Event) {
	const file = e.target?.files[0];
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
	position: relative;
	border: dashed 1px rgba(0, 0, 0, 0.1);
	width: 50%;
	height: 50%;
}

.upload-container {
	height: 100%;
	top: 0;
	left: 0;

	form {
		height: inherit;
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
		width: 100%;
		height: 100%;
		position: relative;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
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
