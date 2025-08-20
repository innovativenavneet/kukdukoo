import { ActivitiesView } from '../views/ActivitiesView.js';

export class ActivitiesController {
    constructor() {
        this.view = new ActivitiesView();
    }

    render() {
        const mainElement = document.getElementById('main');
        mainElement.innerHTML = this.view.render();
        
        // Add event listeners
        this.addEventListeners();
    }

    addEventListeners() {
        // Add event listeners for activities page interactions
        this.setupActivityDetails();
    }

    setupActivityDetails() {
        const activityCards = document.querySelectorAll('.activity-detail-card');
        activityCards.forEach(card => {
            card.addEventListener('click', () => {
                const activityId = card.dataset.activityId;
                this.showActivityDetails(activityId);
            });
        });
    }

    showActivityDetails(activityId) {
        // Show detailed information about the selected activity
        console.log(`Showing details for activity: ${activityId}`);
    }

    cleanup() {
        // Clean up event listeners if needed
    }
}
