const toggle = document.getElementById('darkModeToggle');
const saved = localStorage.getItem('darkMode');

function setMode(dark) {
    document.body.classList.toggle('dark-mode', dark);
    toggle.textContent = dark ? '☀️ Light Mode' : '🌙 Dark Mode';
}

setMode(saved === 'true');

toggle.onclick = () => {
    const isDark = !document.body.classList.contains('dark-mode');
    setMode(isDark);
    localStorage.setItem('darkMode', isDark);
};