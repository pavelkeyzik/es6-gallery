export class AddImageView {

    render() {
        let self = this;
        
        let addImageView = document.getElementById('addImage');

        addImageView.innerHTML = `
            <input type="text" placeholder="link to image" id="addImageInput">
            <button id="addImageButton">Add</button>
        `;        
    }

}
