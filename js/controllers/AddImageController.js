export class AddImageController {

    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    start() {
        let self = this;
        self.view.render();

        let button = document.getElementById('addImageButton');
        let addImage = document.getElementById('addImage');
        let onDrop = document.getElementById('onDrop');

        button.addEventListener('click', function () {
            let input = document.getElementById('addImageInput');
            self.add(input.value);
        });

        addImage.addEventListener('dragover', function (event) {
            event.preventDefault();
            onDrop.classList.replace('dragleave', 'dragenter');
        });

        addImage.addEventListener('drop', function(event) {
            event.preventDefault();
            console.log(event.dataTransfer.files);
            document.getElementById('fileAttach').files = event.dataTransfer.files;
            onDrop.classList.replace('dragenter', 'dragleave');
        });

        addImage.addEventListener('dragleave', function(event) {
            onDrop.classList.replace('dragenter', 'dragleave');
        });

    }

    add(data) {
        data = { link: data };
        this.model.addImage(data);
    }

}