export class FooterView {
    render() {
        return `
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/contact">→ CONTACT US</a></li>
                            <li><a href="/faq">→ FAQ</a></li>
                            <li><a href="/info">→ INFO</a></li>
                            <li><a href="/terms">→ TERMS & CONDITIONS</a></li>
                            <li><a href="/privacy">→ PRIVACY POLICY</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <div class="footer-logo">
                            <div class="footer-logo-icon">🐔</div>
                            <h2>KUK DU KOO FEST</h2>
                        </div>
                        <a href="/tickets" class="book-tickets-btn">BOOK TICKETS →</a>
                    </div>
                    
                    <div class="footer-section">
                        <h3>OUR SOCIAL</h3>
                        <div class="social-icons">
                            <div class="social-icon"></div>
                            <div class="social-icon"></div>
                            <div class="social-icon"></div>
                            <div class="social-icon"></div>
                        </div>
                        
                        <h3>WRITE TO US</h3>
                        <input type="email" placeholder="Enter your email" class="email-input">
                    </div>
                </div>
            </footer>
        `;
    }
}
