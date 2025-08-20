import { HomeView } from '../views/HomeView.js';

export class HomeController {
    constructor() {
        this.view = new HomeView();
    }

    render() {
        const mainElement = document.getElementById('main');
        mainElement.innerHTML = this.view.render();
        
        // Add event listeners
        this.addEventListeners();
    }

    addEventListeners() {
        // Add event listeners for home page interactions
        this.setupTicketSelection();
        this.setupFAQAccordion();
    }

    setupTicketSelection() {
        // Ticket selection logic
        const addButtons = document.querySelectorAll('.add-ticket-btn');
        addButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const ticketType = e.target.dataset.ticketType;
                const price = parseInt(e.target.dataset.price);
                this.addTicket(ticketType, price);
            });
        });
    }

    setupFAQAccordion() {
        // FAQ accordion logic
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });
    }

    addTicket(ticketType, price) {
        // Ticket addition logic
        console.log(`Added ticket: ${ticketType} - ₹${price}`);
        // Update cart display
    }

    cleanup() {
        // Clean up event listeners if needed
    }
}
