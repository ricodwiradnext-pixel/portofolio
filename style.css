/* 
   MODERN PORTFOLIO CSS
   Desain modern dengan gradient, glassmorphism, dan animasi
*/

:root {
    --bg-color: #f8fafc;
    --surface-color: #ffffff;
    --text-primary: #0f172a;
    --text-secondary: #334155;
    --accent: #3b82f6;
    --accent-light: #60a5fa;
    --accent-gradient: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    --border: #e2e8f0;
    --shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 20px 40px -15px rgba(0, 0, 0, 0.2);
    --font-sans: 'Inter', sans-serif;
    --font-display: 'Space Grotesk', sans-serif;
    --spacing-unit: 1.5rem;
    --card-bg: rgba(255, 255, 255, 0.9);
}

body.dark-mode {
    --bg-color: #0f172a;
    --surface-color: #1e293b;
    --text-primary: #f1f5f9;
    --text-secondary: #cbd5e1;
    --border: #334155;
    --shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
    --card-bg: rgba(30, 41, 59, 0.9);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--bg-color);
    color: var(--text-primary);
    font-family: var(--font-sans);
    line-height: 1.6;
    min-height: 100vh;
    padding: 2rem 1rem;
    transition: background-color 0.3s ease, color 0.3s ease;
    position: relative;
}

/* Animated Gradient Background */
.gradient-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 0% 0%, var(--accent-light) 0%, transparent 50%),
                radial-gradient(circle at 100% 100%, var(--accent) 0%, transparent 50%);
    opacity: 0.05;
    z-index: -1;
    animation: gradientShift 20s ease infinite;
}

@keyframes gradientShift {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.cv-container {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
}

/* Modern Header */
.cv-header {
    margin-bottom: 4rem;
    animation: fadeInUp 0.6s ease;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
}

.name {
    font-family: var(--font-display);
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.1;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
    animation: slideInLeft 0.6s ease;
}

.role {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
}

.role::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 50px;
    height: 3px;
    background: var(--accent-gradient);
    border-radius: 2px;
}

/* Social Links */
.social-links {
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;
}

.social-links a {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    background: var(--card-bg);
    border: 1px solid var(--border);
}

.social-links a i {
    font-size: 1.1rem;
}

.social-links a:hover {
    color: var(--accent);
    transform: translateY(-2px);
    border-color: var(--accent);
    box-shadow: var(--shadow);
}

/* Contact Info */
.contact-info {
    text-align: right;
}

.contact-info p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: flex-end;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
}

.contact-info i {
    color: var(--accent);
}

/* Section Titles */
.cv-section {
    margin-bottom: 4rem;
    animation: fadeInUp 0.6s ease;
    animation-fill-mode: both;
}

.cv-section:nth-child(1) { animation-delay: 0.2s; }
.cv-section:nth-child(2) { animation-delay: 0.3s; }
.cv-section:nth-child(3) { animation-delay: 0.4s; }

.section-title {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.title-badge {
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent);
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
    padding: 0.25rem 1rem;
    border-radius: 2rem;
    border: 1px solid var(--border);
}

.title-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, var(--border) 0%, transparent 100%);
}

/* Card Design */
.card {
    background: var(--card-bg);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border);
    border-radius: 1rem;
    padding: 2rem;
    transition: all 0.3s ease;
    box-shadow: var(--shadow);
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
    border-color: var(--accent-light);
}

/* Experience Item */
.experience-item {
    margin-bottom: 2rem;
}

.item-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
}

.item-title {
    font-size: 1.35rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
}

.item-title a {
    color: var(--text-primary);
    text-decoration: none;
    transition: color 0.3s ease;
}

.item-title a:hover {
    color: var(--accent);
}

.item-org {
    color: var(--accent);
    font-weight: 500;
    font-size: 0.95rem;
}

.item-date {
    font-size: 0.9rem;
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 1rem;
    background: var(--bg-color);
    border-radius: 2rem;
    border: 1px solid var(--border);
}

.item-date i {
    color: var(--accent);
}

.item-desc {
    color: var(--text-secondary);
    margin-top: 1rem;
}

/* Tech Tags */
.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
}

.tech-tag {
    padding: 0.25rem 1rem;
    background: var(--bg-color);
    border: 1px solid var(--border);
    border-radius: 2rem;
    font-size: 0.85rem;
    color: var(--text-secondary);
    transition: all 0.3s ease;
}

.tech-tag:hover {
    background: var(--accent);
    color: white;
    border-color: var(--accent);
}

/* Project Grid */
.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-item {
    background: var(--card-bg);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border);
    border-radius: 1rem;
    padding: 2rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.project-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--accent-gradient);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.project-item:hover::before {
    transform: scaleX(1);
}

.project-icon {
    width: 3rem;
    height: 3rem;
    background: var(--accent-gradient);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.project-icon i {
    font-size: 1.5rem;
    color: white;
}

/* Skills List */
.skills-list {
    list-style: none;
}

.skills-list li {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border);
    color: var(--text-secondary);
    transition: all 0.3s ease;
}

.skills-list li:last-child {
    border-bottom: none;
}

.skills-list li:hover {
    transform: translateX(10px);
    color: var(--accent);
}

.skills-list i {
    color: var(--accent);
    font-size: 1.1rem;
}

/* Education Item */
.education-item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1rem 0;
}

.education-icon {
    width: 3rem;
    height: 3rem;
    background: var(--accent-gradient);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.education-icon i {
    font-size: 1.5rem;
    color: white;
}

/* Inline Sections Grid */
.inline-sections {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

/* Footer */
.cv-footer {
    margin-top: 6rem;
    text-align: center;
}

.footer-stats {
    display: flex;
    justify-content: center;
    gap: 4rem;
    margin-bottom: 2rem;
}

.stat-item {
    text-align: center;
}

.stat-number {
    display: block;
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 700;
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.stat-label {
    font-size: 0.9rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.cv-footer p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
}

/* Theme Button */
.theme-btn {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: var(--card-bg);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border);
    color: var(--text-primary);
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    font-weight: 500;
    border-radius: 2rem;
    cursor: pointer;
    box-shadow: var(--shadow);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 100;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.theme-btn i {
    font-size: 1.1rem;
    color: var(--accent);
}

.theme-btn:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
    border-color: var(--accent);
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .name {
        font-size: 3rem;
    }

    .header-content {
        flex-direction: column;
        align-items: flex-start;
    }

    .contact-info {
        text-align: left;
    }

    .contact-info p {
        justify-content: flex-start;
    }

    .inline-sections {
        grid-template-columns: 1fr;
    }

    .project-grid {
        grid-template-columns: 1fr;
    }

    .footer-stats {
        gap: 2rem;
        flex-wrap: wrap;
    }

    .item-header {
        flex-direction: column;
    }
}

@media (max-width: 480px) {
    .name {
        font-size: 2.5rem;
    }

    .social-links {
        flex-direction: column;
        gap: 0.75rem;
    }

    .social-links a {
        width: 100%;
        justify-content: center;
    }

    .card {
        padding: 1.5rem;
    }

    .theme-btn {
        bottom: 1rem;
        right: 1rem;
        padding: 0.6rem 1.2rem;
    }
}
