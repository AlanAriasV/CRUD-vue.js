<template>
    <div class="modal-container">
        <div class="modal">
            <div class="modal-header">
                <h1>Subir imagen</h1>
            </div>
            <div class="modal-body">
                <div class="upload-placeholder">
                    <form method="post" action="" enctype="multipart/form-data">
                        <input type="file" name="files[]" id="file" />
                        <label for="file">
                            <i class="pi pi-image" />
                            Arrasta la imagen aquí o presiona para buscar
                        </label>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-cancel">
                    Cancelar
                </button>
                <button class="btn-accept">
                    Aceptar
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.modal {
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


.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    /* --m-background is set as inline style */
    background: rgba(0, 0, 0, 0.5);
}

.modal-body {
    position: relative;
    border: dashed 1px rgba(0, 0, 0, 0.1);
    width: 50%;
    height: 50%;
}

.upload-placeholder {
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
        padding: 0px 10px;
        height: 100%;
    }
}

.modal-footer {
    display: flex;
    gap: 50px;
}
</style>