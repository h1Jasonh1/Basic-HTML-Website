const toggleButton = document.getElementById('toggle-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
    // Check which mode is currently active
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        // Optional: Save preference to localStorage
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        // Optional: Save preference to localStorage
        localStorage.setItem('theme', 'light');
    }
});