export class TicketsView {
    render() {
        return `
            <section class="tickets-page">
                <div class="page-container">
                    <div class="page-header">
                        <h1>Book Your Tickets</h1>
                        <p>Secure your spot at Kuk Du Koo Fest</p>
                    </div>
                    
                    <div class="tickets-content">
                        <div class="tickets-section">
                            <div class="ticket-phases">
                                <div class="phase">
                                    <div class="phase-badge sold-out">SOLD OUT</div>
                                    <div class="phase-name">EARLY BIRD</div>
                                    <div class="phase-price">₹399</div>
                                </div>
                                <div class="phase">
                                    <div class="phase-badge live">LIVE</div>
                                    <div class="phase-name">PHASE 1</div>
                                    <div class="phase-price">₹599</div>
                                </div>
                                <div class="phase">
                                    <div class="phase-badge coming-soon">COMING SOON</div>
                                    <div class="phase-name">PHASE 2</div>
                                    <div class="phase-price">₹799</div>
                                </div>
                            </div>
                            
                            <div class="ticket-options">
                                <h2>Available Tickets</h2>
                                
                                <div class="ticket-option">
                                    <div class="ticket-info">
                                        <h3>Early Bird Pass - Day 1 (Saturday)</h3>
                                        <p>Access to all activities on Saturday, October 11th, 2025</p>
                                        <small>Passes are mandatory for both children and parents.</small>
                                    </div>
                                    <div class="ticket-price">₹399</div>
                                    <button class="add-ticket-btn" data-ticket-type="Day 1 Pass" data-price="399">Add</button>
                                </div>
                                
                                <div class="ticket-option">
                                    <div class="ticket-info">
                                        <h3>Early Bird Pass - Day 2 (Sunday)</h3>
                                        <p>Access to all activities on Sunday, October 12th, 2025</p>
                                        <small>Passes are mandatory for kids and parents/guardians.</small>
                                    </div>
                                    <div class="ticket-price">₹399</div>
                                    <button class="add-ticket-btn" data-ticket-type="Day 2 Pass" data-price="399">Add</button>
                                </div>
                                
                                <div class="ticket-option">
                                    <div class="ticket-info">
                                        <h3>Early Bird Pass - Both Days</h3>
                                        <p>Access to all activities on both days</p>
                                        <small>Tickets are mandatory for both children and parents.</small>
                                    </div>
                                    <div class="ticket-price">₹599</div>
                                    <button class="add-ticket-btn" data-ticket-type="Both Days Pass" data-price="599">Add</button>
                                </div>
                                
                                <div class="ticket-option">
                                    <div class="ticket-info">
                                        <h3>Family Pack (2 Adults + 2 Children)</h3>
                                        <p>Perfect for families with multiple children</p>
                                        <small>Includes access to all activities for both days.</small>
                                    </div>
                                    <div class="ticket-price">₹999</div>
                                    <button class="add-ticket-btn" data-ticket-type="Family Pack" data-price="999">Add</button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="cart-section">
                            <div class="cart-container">
                                <h2>Your Cart</h2>
                                <div class="cart-items">
                                    <!-- Cart items will be dynamically populated -->
                                </div>
                                <div class="cart-total">Total: ₹0</div>
                                <button class="checkout-btn">Proceed to Checkout</button>
                            </div>
                            
                            <div class="ticket-policy">
                                <h3>Important Information</h3>
                                <ul>
                                    <li>All children must be accompanied by an adult</li>
                                    <li>Tickets are non-refundable</li>
                                    <li>Food and beverages are not included</li>
                                    <li>Parking is available on-site</li>
                                    <li>Please arrive 15 minutes before your scheduled activities</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}
