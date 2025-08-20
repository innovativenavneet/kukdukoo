import { Router } from './controllers/Router.js';
import { HeaderController } from './controllers/HeaderController.js';
import { FooterController } from './controllers/FooterController.js';

class App {
    constructor() {
        this.router = new Router();
        this.headerController = new HeaderController();
        this.footerController = new FooterController();
        this.init();
    }

    init() {
        // Initialize header and footer
        this.headerController.render();
        this.footerController.render();
        
        // Initialize router
        this.router.init();
        
        // Handle initial route
        const path = window.location.pathname || '/';
        this.router.navigate(path);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new App();
});
