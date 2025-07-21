// Theme switcher functionality for Tailwind dark mode
(function() {
    // Get theme from localStorage or system preference
    function getTheme() {
        const stored = localStorage.getItem('theme');
        if (stored) return stored;
        
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // Set theme
    function setTheme(theme) {
        localStorage.setItem('theme', theme);
        
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    // Initialize theme
    const currentTheme = getTheme();
    setTheme(currentTheme);

    // Theme switcher button functionality
    document.addEventListener('DOMContentLoaded', function() {
        const themeSwitcher = document.querySelector('.theme-switcher');
        const themeResetter = document.querySelector('.theme-resetter');
        
        if (themeSwitcher) {
            themeSwitcher.addEventListener('click', function() {
                const current = getTheme();
                const newTheme = current === 'dark' ? 'light' : 'dark';
                setTheme(newTheme);
            });
        }
        
        if (themeResetter) {
            themeResetter.addEventListener('click', function() {
                localStorage.removeItem('theme');
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                setTheme(systemTheme);
            });
        }
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
})();