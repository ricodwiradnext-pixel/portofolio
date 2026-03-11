/**
 * MODERN JAVASCRIPT
 * Theme toggle dengan animasi dan penyimpanan preferensi
 */

const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn.querySelector('i');
const themeText = themeBtn.querySelector('span');

// Cek preferensi tema yang tersimpan
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.className = 'fas fa-sun';
    themeText.textContent = 'Light Mode';
}

themeBtn.addEventListener('click', () => {
    // Animasi klik
    themeBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        themeBtn.style.transform = '';
    }, 200);
    
    // Toggle dark mode
    document.body.classList.toggle('dark-mode');
    
    // Update icon dan text
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.className = 'fas fa-sun';
        themeText.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
        
        // Animasi transisi
        document.body.style.backgroundColor = '#0f172a';
    } else {
        themeIcon.className = 'fas fa-moon';
        themeText.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
        
        document.body.style.backgroundColor = '#f8fafc';
    }
});

// Efek parallax ringan pada gradient background
document.addEventListener('mousemove', (e) => {
    const gradientBg = document.querySelector('.gradient-bg');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    gradientBg.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
});

// Smooth scroll untuk link internal
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
