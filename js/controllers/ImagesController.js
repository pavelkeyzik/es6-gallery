export class ImagesController {

    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    start() {
        let images = this.getImages();
        this.view.render(this.getImages());
        this.model.subject.subscribe(data => this.view.render(this.getImages()));
    }

    getImages() {
        return this.model.getImages();
    }
    
}