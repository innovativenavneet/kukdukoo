export class ActivitiesView {
    render() {
        return `
            <section class="activities-page">
                <div class="page-container">
                    <div class="page-header">
                        <h1>Festival Activities</h1>
                        <p>Discover all the exciting activities at Kuk Du Koo Fest</p>
                    </div>
                    
                    <div class="activities-content">
                        <div class="activity-detail-card" data-activity-id="theatre">
                            <div class="activity-header">
                                <span class="activity-icon">🎭</span>
                                <h2>Theatre</h2>
                            </div>
                            <div class="activity-description">
                                <p>Experience magical theatrical performances specially designed for children. Watch stories come to life on stage with professional actors and stunning sets.</p>
                                <div class="activity-details">
                                    <div class="detail-item">
                                        <strong>Duration:</strong> 45-60 minutes
                                    </div>
                                    <div class="detail-item">
                                        <strong>Age Group:</strong> 3-12 years
                                    </div>
                                    <div class="detail-item">
                                        <strong>Schedule:</strong> Multiple shows daily
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="activity-detail-card" data-activity-id="storytelling">
                            <div class="activity-header">
                                <span class="activity-icon">📖</span>
                                <h2>Storytelling</h2>
                            </div>
                            <div class="activity-description">
                                <p>Join our master storytellers for interactive storytelling sessions. Children will be transported to magical worlds through engaging narratives and audience participation.</p>
                                <div class="activity-details">
                                    <div class="detail-item">
                                        <strong>Duration:</strong> 30-45 minutes
                                    </div>
                                    <div class="detail-item">
                                        <strong>Age Group:</strong> 3-10 years
                                    </div>
                                    <div class="detail-item">
                                        <strong>Schedule:</strong> Every hour
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="activity-detail-card" data-activity-id="author-interactions">
                            <div class="activity-header">
                                <span class="activity-icon">⚡</span>
                                <h2>Author Interactions</h2>
                            </div>
                            <div class="activity-description">
                                <p>Meet and interact with beloved children's authors. Get books signed, ask questions, and learn about the creative process behind your favorite stories.</p>
                                <div class="activity-details">
                                    <div class="detail-item">
                                        <strong>Duration:</strong> 60 minutes
                                    </div>
                                    <div class="detail-item">
                                        <strong>Age Group:</strong> 5-15 years
                                    </div>
                                    <div class="detail-item">
                                        <strong>Schedule:</strong> 2 sessions daily
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="activity-detail-card" data-activity-id="workshops">
                            <div class="activity-header">
                                <span class="activity-icon">📚</span>
                                <h2>Workshops</h2>
                            </div>
                            <div class="activity-description">
                                <p>Participate in creative workshops including art, craft, writing, and music. Children will create their own masterpieces to take home.</p>
                                <div class="activity-details">
                                    <div class="detail-item">
                                        <strong>Duration:</strong> 45-90 minutes
                                    </div>
                                    <div class="detail-item">
                                        <strong>Age Group:</strong> 4-12 years
                                    </div>
                                    <div class="detail-item">
                                        <strong>Schedule:</strong> Multiple sessions
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="activity-detail-card" data-activity-id="puppetshows">
                            <div class="activity-header">
                                <span class="activity-icon">🎭</span>
                                <h2>Puppet Shows</h2>
                            </div>
                            <div class="activity-description">
                                <p>Enjoy traditional and modern puppet shows featuring colorful characters and engaging stories that will captivate children of all ages.</p>
                                <div class="activity-details">
                                    <div class="detail-item">
                                        <strong>Duration:</strong> 30-40 minutes
                                    </div>
                                    <div class="detail-item">
                                        <strong>Age Group:</strong> 2-10 years
                                    </div>
                                    <div class="detail-item">
                                        <strong>Schedule:</strong> Every 2 hours
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="activity-detail-card" data-activity-id="food-market">
                            <div class="activity-header">
                                <span class="activity-icon">🍽️</span>
                                <h2>Food & Flea Market</h2>
                            </div>
                            <div class="activity-description">
                                <p>Explore a variety of food stalls and flea market vendors. Find unique toys, books, crafts, and delicious treats for the whole family.</p>
                                <div class="activity-details">
                                    <div class="detail-item">
                                        <strong>Duration:</strong> All day
                                    </div>
                                    <div class="detail-item">
                                        <strong>Age Group:</strong> All ages
                                    </div>
                                    <div class="detail-item">
                                        <strong>Schedule:</strong> 11 AM - 7 PM
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}
