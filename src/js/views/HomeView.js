export class HomeView {
    render() {
        return `
            ${this.renderHeroSection()}
            ${this.renderWhatsInStoreSection()}
            ${this.renderFAQSection()}
            ${this.renderUpcomingCitiesSection()}
        `;
    }

    renderHeroSection() {
        return `
            <section class="hero-section">
                <div class="hero-background">
                    <div class="hero-content">
                        <div class="hero-left">
                            <div class="gateway-illustration">
                                <div class="gateway-monument"></div>
                            </div>
                        </div>
                        
                        <div class="hero-center">
                            <h1 class="city-name">MUMBAI</h1>
                            <button class="cta-button">LIMITED PASSES BOOK YOURS NOW! →</button>
                            
                            <div class="event-details">
                                <div class="event-detail">
                                    <span class="icon">📅</span>
                                    <span>11TH - 12TH OCT '25</span>
                                </div>
                                <div class="event-detail">
                                    <span class="icon">🕐</span>
                                    <span>11 AM ONWARDS</span>
                                </div>
                                <div class="event-detail">
                                    <span class="icon">📍</span>
                                    <span>CIDCO EXHIBITION CENTER (INDOOR) NAVI MUMBAI</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="hero-right">
                            ${this.renderTicketModule()}
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderTicketModule() {
        return `
            <div class="ticket-module">
                <div class="ticket-phases">
                    <div class="phase">
                        <div class="phase-badge sold-out">SOLD OUT</div>
                        <div class="phase-name">EARLY BIRD</div>
                        <div class="phase-price">399</div>
                    </div>
                    <div class="phase">
                        <div class="phase-badge live">LIVE</div>
                        <div class="phase-name">PHASE 1</div>
                        <div class="phase-price">599</div>
                    </div>
                    <div class="phase">
                        <div class="phase-badge coming-soon">COMING SOON</div>
                        <div class="phase-name">PHASE 2</div>
                        <div class="phase-price">799</div>
                    </div>
                </div>
                
                <div class="ticket-selection">
                    <div class="holding-timer">
                        <span class="icon">🔒</span>
                        <span>Holding your spot for 05:42 Mins</span>
                    </div>
                    
                    <div class="ticket-types">
                        <div class="ticket-type">
                            <div class="ticket-info">
                                <h4>Early Bird Pass - Day 1 (Saturday)</h4>
                                <p class="ticket-note">Passes are mandatory for both children and parents.</p>
                            </div>
                            <div class="ticket-price">399</div>
                            <button class="add-ticket-btn" data-ticket-type="day1" data-price="399">Add</button>
                        </div>
                        
                        <div class="ticket-type">
                            <div class="ticket-info">
                                <h4>Early Bird Pass - Day 2 (Sunday)</h4>
                                <p class="ticket-note">Passes are mandatory for kids and parents/guardians.</p>
                            </div>
                            <div class="ticket-price">399</div>
                            <button class="add-ticket-btn" data-ticket-type="day2" data-price="399">Add</button>
                        </div>
                        
                        <div class="ticket-type">
                            <div class="ticket-info">
                                <h4>Early Bird Pass - Both Days</h4>
                                <p class="ticket-note">Tickets are mandatory for both children and parents.</p>
                            </div>
                            <div class="ticket-price">599</div>
                            <button class="add-ticket-btn" data-ticket-type="both-days" data-price="599">Add</button>
                        </div>
                    </div>
                    
                    <div class="ticket-summary">
                        <div class="summary-left">
                            <span>Qty: 0 Total: ₹0</span>
                        </div>
                        <div class="summary-right">
                            <button class="proceed-btn">Proceed ></button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderWhatsInStoreSection() {
        return `
            <section class="whats-in-store-section">
                <div class="section-container">
                    <div class="section-header">
                        <div class="section-icon">🐔</div>
                        <h2>WHAT'S IN STORE</h2>
                    </div>
                    
                    <div class="activities-grid">
                        <div class="activity-card">
                            <div class="activity-image theatre">
                                <div class="activity-placeholder">🎭</div>
                            </div>
                            <div class="activity-info">
                                <h3>Theatre</h3>
                            </div>
                        </div>
                        
                        <div class="activity-card">
                            <div class="activity-image storytelling">
                                <div class="activity-placeholder">📖</div>
                            </div>
                            <div class="activity-info">
                                <h3>Storytelling</h3>
                            </div>
                        </div>
                        
                        <div class="activity-card">
                            <div class="activity-image author-interactions">
                                <div class="activity-placeholder">⚡</div>
                            </div>
                            <div class="activity-info">
                                <h3>Author interactions</h3>
                            </div>
                        </div>
                        
                        <div class="activity-card">
                            <div class="activity-image workshops">
                                <div class="activity-placeholder">📚</div>
                            </div>
                            <div class="activity-info">
                                <h3>Workshops</h3>
                            </div>
                        </div>
                        
                        <div class="activity-card">
                            <div class="activity-image puppetshows">
                                <div class="activity-placeholder">🎭</div>
                            </div>
                            <div class="activity-info">
                                <h3>Puppetshows</h3>
                            </div>
                        </div>
                        
                        <div class="activity-card">
                            <div class="activity-image food-market">
                                <div class="activity-placeholder">🍽️</div>
                            </div>
                            <div class="activity-info">
                                <h3>Food & flea market</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderFAQSection() {
        return `
            <section class="faq-section">
                <div class="section-container">
                    <div class="section-header">
                        <h2>FREQUENTLY ASKED QUESTIONS</h2>
                        <span class="faq-icon">❓</span>
                    </div>
                    
                    <div class="faq-list">
                        <div class="faq-item">
                            <div class="faq-question">
                                <span>1. We are calling to book a stall/booth or for sponsorship?</span>
                                <span class="chevron">▼</span>
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <div class="faq-question">
                                <span>2. Is there any discount for group pass booking?</span>
                                <span class="chevron">▼</span>
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <div class="faq-question">
                                <span>3. Can I cancel the pass or change the date?</span>
                                <span class="chevron">▼</span>
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <div class="faq-question">
                                <span>4. My payment has gone through, but I have not received a confirmation of my purchase. Has my registration been successful?</span>
                                <span class="chevron">▼</span>
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <div class="faq-question">
                                <span>5. What are the dates and time of the Festival?</span>
                                <span class="chevron">▼</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderUpcomingCitiesSection() {
        return `
            <section class="upcoming-cities-section">
                <div class="section-container">
                    <div class="section-header">
                        <h2>UPCOMING CITIES</h2>
                    </div>
                    
                    <div class="cities-grid">
                        <div class="city-card">
                            <div class="city-monument pune">
                                <div class="monument-placeholder">🏛️</div>
                            </div>
                            <div class="city-banner">
                                <span>10th Aug 25'</span>
                            </div>
                            <h3>Pune</h3>
                        </div>
                        
                        <div class="city-card">
                            <div class="city-monument mumbai">
                                <div class="monument-placeholder">🏛️</div>
                            </div>
                            <div class="city-banner">
                                <span>10th Aug 25'</span>
                            </div>
                            <h3>Mumbai</h3>
                        </div>
                        
                        <div class="city-card">
                            <div class="city-monument delhi">
                                <div class="monument-placeholder">🏛️</div>
                            </div>
                            <div class="city-banner">
                                <span>10th Aug 25'</span>
                            </div>
                            <h3>New Delhi</h3>
                        </div>
                        
                        <div class="city-card">
                            <div class="city-monument hyderabad">
                                <div class="monument-placeholder">🏛️</div>
                            </div>
                            <div class="city-banner">
                                <span>10th Aug 25'</span>
                            </div>
                            <h3>Hyderabad</h3>
                        </div>
                        
                        <div class="city-card">
                            <div class="city-monument bangalore">
                                <div class="monument-placeholder">🏛️</div>
                            </div>
                            <div class="city-banner">
                                <span>10th Aug 25'</span>
                            </div>
                            <h3>Bengaluru</h3>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}
