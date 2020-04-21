export class Modal{
    constructor(contentId, fallbackText){
        this.contentTemplateEl = document.getElementById(contentId);
        this.modalTemplateEl = document.getElementById('modal-template');
        this.fallbackText = fallbackText;

    }
    show(){
        if('content' in document.createElement('template')){
            const modalElements = document.importNode(this.modalTemplateEl.content, true);
            this.backdropElement = modalElements.querySelector('.backdrop');
            this.modalElement = modalElements.querySelector('.modal');
            const contentElement = document.importNode(this.contentTemplateEl.content, true);
            this.modalElement.appendChild(contentElement);
            document.body.insertAdjacentElement('afterbegin', this.backdropElement);
            document.body.insertAdjacentElement('afterbegin', this.modalElement);
        }
        else{
            alert(this.fallbackText);
        }
    };

    hide(){
        if(this.modalElement){
            document.body.removeChild(this.modalElement);
            document.body.removeChild(this.backdropElement);
            this.modalElement=null;
            this.backdropElement= null;
        }
    };

};