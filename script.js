let heroMobile = document.querySelector(".hero-mobile");
let heroDesktop = document.querySelector(".hero-desktop");
let container = document.querySelector(".container")

const mediaQuery = window.matchMedia("(max-width: 768px)");

function show (element) {
    if (element.classList?.contains("hidden")) {
        element.classList?.remove("hidden")
    }
}

function hide (element) {
    if (!element.classList?.contains("hidden")) {
        element.classList?.add("hidden")
    }
}
// Define a callback function to run when the state changes
function handleMediaChange (event) {
    if (event.matches) {
        // Mobile screen logic
        console.log("Mobile View");
        show(heroMobile)
        hide(heroDesktop)
        if (container.classList?.contains("desktop")) {
            container.classList?.remove("desktop")
        }

    } else {
        // Desktop screen logic
        console.log("Desktop View");
        show(heroDesktop)
        hide(heroMobile)
        container.classList?.add("desktop")
    }
}

// Add the event listener (modern approach)
mediaQuery.addEventListener("change", handleMediaChange);

// Initial check when the script loads
handleMediaChange(mediaQuery);