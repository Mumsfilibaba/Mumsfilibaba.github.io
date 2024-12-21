
// Function to handle the 'themeChanged' event
function onThemeChanged(event) {
    const body           = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    if (darkModeToggle) {
        // Retrieve the current theme
        let theme = body.classList.contains("colorscheme-dark") ? "light" : "dark";

        darkModeToggle.setAttribute("aria-pressed", theme === "dark");
        darkModeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode");

        // Update the icon
        const icon = darkModeToggle.querySelector('i');
        if (theme === "dark") {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }
};

document.addEventListener("DOMContentLoaded", function () {
    // Initialize Particles.js
    try {
        Particles.init({
            selector: ".background",
            color: ["#333333", "#666666", "#999999"],
            opacity: 0.3,
            connectParticles: true,
            responsive: [
                {
                breakpoint: 768,
                options: {
                    color: ["#555555", "#888888", "#CCCCCC"],
                    maxParticles: 40,
                    connectParticles: true
                }
                }
            ]
        });
    } catch (error) {
        console.error("Particles.js initialization failed:", error);
    }
});

// Add the event listener for 'themeChanged'
document.addEventListener('themeChanged', onThemeChanged);
