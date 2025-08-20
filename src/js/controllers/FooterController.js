import { FooterView } from '../views/FooterView.js';

export class FooterController {
    constructor() {
        this.view = new FooterView();
    }

    render() {
        const footerElement = document.getElementById('footer');
        footerElement.innerHTML = this.view.render();
        
        // Add event listeners
        this.addEventListeners();
    }

    addEventListeners() {
        // Footer-specific event listeners can be added here
    }
}
