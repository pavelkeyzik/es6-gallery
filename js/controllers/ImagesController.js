export class ImagesController {

    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    start() {
        let images = this.model.getImages();
        this.update(images);
    }

    getImages() {
        return this.model.getImages();
    }

    update(images) {
        this.view.render(images);
    }
    
}