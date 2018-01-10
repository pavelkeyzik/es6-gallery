import { AddImageController } from '../controllers/AddImageController';

export class AddImageView {

    constructor() {
        this.controller = new AddImageController();
    }

    render() {
        var self = this;
        
        let addImageView = document.getElementById('addImage');

        addImageView.innerHTML = `
            <input type="text" placeholder="link to image" id="addImageInput">
            <button id="addImageButton">Add</button>
        `;

        let button = document.getElementById('addImageButton');
        
        button.addEventListener('click', function () {
            let input = document.getElementById('addImageInput');
            self.controller.add(input.value);
        });
        
    }

}
