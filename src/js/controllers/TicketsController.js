import { TicketsView } from '../views/TicketsView.js';

export class TicketsController {
    constructor() {
        this.view = new TicketsView();
        this.cart = [];
    }

    render() {
        const mainElement = document.getElementById('main');
        mainElement.innerHTML = this.view.render();
        
        // Add event listeners
        this.addEventListeners();
    }

    addEventListeners() {
        // Add event listeners for tickets page interactions
        this.setupTicketSelection();
        this.setupQuantityControls();
        this.setupCheckout();
    }

    setupTicketSelection() {
        const addButtons = document.querySelectorAll('.add-ticket-btn');
        addButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const ticketType = e.target.dataset.ticketType;
                const price = parseInt(e.target.dataset.price);
                this.addToCart(ticketType, price);
            });
        });
    }

    setupQuantityControls() {
        const quantityBtns = document.querySelectorAll('.quantity-btn');
        quantityBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.dataset.action;
                const ticketType = e.target.dataset.ticketType;
                this.updateQuantity(ticketType, action);
            });
        });
    }

    setupCheckout() {
        const checkoutBtn = document.querySelector('.checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                this.proceedToCheckout();
            });
        }
    }

    addToCart(ticketType, price) {
        const existingItem = this.cart.find(item => item.type === ticketType);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({ type: ticketType, price: price, quantity: 1 });
        }
        this.updateCartDisplay();
    }

    updateQuantity(ticketType, action) {
        const item = this.cart.find(item => item.type === ticketType);
        if (item) {
            if (action === 'increase') {
                item.quantity += 1;
            } else if (action === 'decrease' && item.quantity > 1) {
                item.quantity -= 1;
            } else if (action === 'decrease' && item.quantity === 1) {
                this.cart = this.cart.filter(cartItem => cartItem.type !== ticketType);
            }
        }
        this.updateCartDisplay();
    }

    updateCartDisplay() {
        const cartContainer = document.querySelector('.cart-items');
        const totalElement = document.querySelector('.cart-total');
        
        if (cartContainer) {
            cartContainer.innerHTML = this.cart.map(item => `
                <div class="cart-item">
                    <span>${item.type}</span>
                    <div class="quantity-controls">
                        <button class="quantity-btn" data-action="decrease" data-ticket-type="${item.type}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" data-action="increase" data-ticket-type="${item.type}">+</button>
                    </div>
                    <span>₹${item.price * item.quantity}</span>
                </div>
            `).join('');
        }
        
        if (totalElement) {
            const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            totalElement.textContent = `Total: ₹${total}`;
        }
    }

    proceedToCheckout() {
        if (this.cart.length === 0) {
            alert('Please add tickets to your cart before proceeding.');
            return;
        }
        
        // Here you would typically redirect to a payment gateway
        console.log('Proceeding to checkout with:', this.cart);
        alert('Redirecting to payment gateway...');
    }

    cleanup() {
        // Clean up event listeners if needed
    }
}
