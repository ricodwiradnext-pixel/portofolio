/**
 * STEP 17: THE JAVASCRIPT LOGIC
 * This script handles the interaction when the theme button is clicked.
 */

// 1. We select the button from the HTML using its ID
const themeBtn = document.getElementById('theme-toggle');

// 2. We add a 'click' event listener to the button
themeBtn.addEventListener('click', () => {
    
    // 3. We toggle the 'dark-mode' class on the <body> tag
    // This will trigger the Step 16 CSS rules we wrote earlier.
    document.body.classList.toggle('dark-mode');
    
    // 4. (Optional) Provide feedback on the button itself
    if (document.body.classList.contains('dark-mode')) {
        themeBtn.textContent = 'Light Mode';
    } else {
        themeBtn.textContent = 'Dark Mode';
    }
});
