export class ImagesController {

    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    start() {
        let images = this.getImages();
        this.view.render(this.getImages());
        this.model.subject.subscribe(data => {
            this.view.render(this.getImages());
            this.events();
        });
    }

    getImages() {
        return this.model.getImages();
    }

    events() {
        console.log(1);
        let remove = document.getElementsByClassName('images__remove');
        console.log(remove.length);
        for(let i = 0; i < remove.length; i++) {
            console.log(remove[i]);
            remove[i].addEventListener('click', function (params) {
                alert(i); 
            });
        }
            
    }
    
}