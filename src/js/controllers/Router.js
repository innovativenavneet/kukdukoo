import { HomeController } from './HomeController.js';
import { InfoController } from './InfoController.js';
import { ActivitiesController } from './ActivitiesController.js';
import { TicketsController } from './TicketsController.js';

export class Router {
    constructor() {
        this.routes = {
            '/': HomeController,
            '/home': HomeController,
            '/info': InfoController,
            '/activities': ActivitiesController,
            '/tickets': TicketsController
        };
        this.currentController = null;
    }

    init() {
        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            this.navigate(window.location.pathname);
        });

        // Handle navigation clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-nav]')) {
                e.preventDefault();
                const href = e.target.getAttribute('href');
                this.navigate(href);
            }
        });
    }

    navigate(path) {
        const Controller = this.routes[path] || this.routes['/'];
        
        // Clean up current controller
        if (this.currentController && this.currentController.cleanup) {
            this.currentController.cleanup();
        }

        // Create and render new controller
        this.currentController = new Controller();
        this.currentController.render();

        // Update URL without page reload
        if (window.location.pathname !== path) {
            window.history.pushState({}, '', path);
        }
    }
}
