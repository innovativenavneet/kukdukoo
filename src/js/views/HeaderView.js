export class HeaderView {
    render() {
        return `
            <nav class="header">
                <div class="header-container">
                    <div class="logo">
                        <div class="logo-icon">🐔</div>
                        <div class="logo-text">
                            <h1>KUK DU KOO FEST</h1>
                        </div>
                    </div>
                    
                    <div class="navigation">
                        <a href="/" class="nav-button" data-nav>HOME</a>
                        <a href="/info" class="nav-button" data-nav>INFO</a>
                        <a href="/activities" class="nav-button" data-nav>ACTIVITIES</a>
                        <a href="/tickets" class="nav-button tickets-button" data-nav>TICKETS</a>
                    </div>
                </div>
            </nav>
        `;
    }
}
