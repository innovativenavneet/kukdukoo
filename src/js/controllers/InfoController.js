import { InfoView } from '../views/InfoView.js';

export class InfoController {
    constructor() {
        this.view = new InfoView();
    }

    render() {
        const mainElement = document.getElementById('main');
        mainElement.innerHTML = this.view.render();
        
        // Add event listeners
        this.addEventListeners();
    }

    addEventListeners() {
        // Add event listeners for info page interactions
    }

    cleanup() {
        // Clean up event listeners if needed
    }
}
