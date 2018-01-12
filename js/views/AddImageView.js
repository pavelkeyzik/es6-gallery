export class AddImageView {

    render() {
        let self = this;
        
        let addImageView = document.getElementById('addImage');

        addImageView.innerHTML = `
            <input type="text" placeholder="link to image" id="addImageInput">
            <button id="addImageButton">Add</button>
            <div id="onDrop" class="drag dragleave">
                <i class="material-icons">photo_camera</i>
                <div class="drag__title">Отпустите мышку, чтобы начать загрузку</div>
                <div class="drag__description">Максимальный размер файла и бла-бла-бла...</div>
            </div>
        `;        
    }

}
