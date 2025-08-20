import { HeaderView } from '../views/HeaderView.js';

export class HeaderController {
    constructor() {
        this.view = new HeaderView();
    }

    render() {
        const headerElement = document.getElementById('header');
        headerElement.innerHTML = this.view.render();
        
        // Add event listeners
        this.addEventListeners();
    }

    addEventListeners() {
        // Navigation event listeners are handled by the Router
        // Additional header-specific events can be added here
    }
}
