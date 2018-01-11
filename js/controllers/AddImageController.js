export class AddImageController {

    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    start() {
        let self = this;
        self.view.render();

        let button = document.getElementById('addImageButton');
        
        button.addEventListener('click', function () {
            let input = document.getElementById('addImageInput');
            self.add(input.value);
        });
    }

    add(data) {
        data = { link: data };
        this.model.addImage(data);
    }

}