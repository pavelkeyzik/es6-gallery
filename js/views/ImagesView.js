import { ImagesController } from '../controllers/ImagesController';

export class ImagesView {

    constructor() {
        this.controller = new ImagesController();
    }

    render() {
        let self = this;

        let data = self.controller.getImages();

        if(data) {
            
            let block = document.getElementById('imagesView');
            let templateString = '';

            for(let item of data) {
                templateString += `<li>${ item.link }</li>`;
            }

            block.innerHTML = templateString;

        }
    }

}