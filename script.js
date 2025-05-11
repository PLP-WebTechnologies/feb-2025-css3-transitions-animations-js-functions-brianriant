// Get DOM elements
const themeToggle = document.getElementById('themeToggle');
const accentColorInput = document.getElementById('accentColor');
const root = document.documentElement;

// Load saved preferences
function loadPreferences() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedAccentColor = localStorage.getItem('accentColor') || '#ff5733';
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    
    root.style.setProperty('--accent-color', savedAccentColor);
    accentColorInput.value = savedAccentColor;
}

// Save preferences to localStorage
function savePreferences(theme, accentColor) {
    localStorage.setItem('theme', theme);
    localStorage.setItem('accentColor', accentColor);
}

// Theme toggle handler
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    savePreferences(currentTheme, accentColorInput.value);
});

// Color change handler
accentColorInput.addEventListener('input', (e) => {
    const newColor = e.target.value;
    root.style.setProperty('--accent-color', newColor);
    savePreferences(
        document.body.classList.contains('dark-theme') ? 'dark' : 'light',
        newColor
    );
});

// Load preferences on page load
loadPreferences();
