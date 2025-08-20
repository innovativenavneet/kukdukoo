export class InfoView {
    render() {
        return `
            <section class="info-page">
                <div class="page-container">
                    <div class="page-header">
                        <h1>Festival Information</h1>
                        <p>Everything you need to know about Kuk Du Koo Fest</p>
                    </div>
                    
                    <div class="info-content">
                        <div class="info-section">
                            <h2>About the Festival</h2>
                            <p>Kuk Du Koo Fest is a children's literature and arts festival that brings together young readers, authors, and artists for an unforgettable experience filled with storytelling, workshops, performances, and creative activities.</p>
                        </div>
                        
                        <div class="info-section">
                            <h2>Event Details</h2>
                            <div class="event-info-grid">
                                <div class="info-card">
                                    <h3>Date & Time</h3>
                                    <p>11th - 12th October 2025</p>
                                    <p>11 AM onwards</p>
                                </div>
                                <div class="info-card">
                                    <h3>Venue</h3>
                                    <p>CIDCO Exhibition Center</p>
                                    <p>Navi Mumbai, Maharashtra</p>
                                </div>
                                <div class="info-card">
                                    <h3>Age Group</h3>
                                    <p>Children aged 3-15 years</p>
                                    <p>Parents welcome</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="info-section">
                            <h2>What to Expect</h2>
                            <ul class="expectations-list">
                                <li>Interactive storytelling sessions</li>
                                <li>Meet & greet with children's authors</li>
                                <li>Creative workshops and activities</li>
                                <li>Theatrical performances</li>
                                <li>Puppet shows</li>
                                <li>Food and flea market</li>
                                <li>Book stalls and merchandise</li>
                            </ul>
                        </div>
                        
                        <div class="info-section">
                            <h2>Getting There</h2>
                            <div class="transport-info">
                                <div class="transport-option">
                                    <h3>By Car</h3>
                                    <p>Parking available on-site</p>
                                </div>
                                <div class="transport-option">
                                    <h3>By Public Transport</h3>
                                    <p>Nearest station: Belapur Railway Station</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}
