export class ImagesView {

    render(images) {        
        let block = document.getElementById('imagesView');
        let templateString = '';

        for(let item of images) {
            templateString += `<li>${ item.link }</li>`;
        }

        block.innerHTML = templateString;
    }

}