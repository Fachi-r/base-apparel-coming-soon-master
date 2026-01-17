let heroMobile = document.querySelector(".hero-mobile");
let heroDesktop = document.querySelector(".hero-desktop");
let container = document.querySelector(".container")
let submitButton = document.querySelector("form button")
let emailInput = document.querySelector("#email")


const isDesktop = window.matchMedia("(min-width: 1024px)");

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
        // Desktop screen logic
        console.log("Desktop View");
        show(heroDesktop)
        hide(heroMobile)
        container.classList?.add("desktop")

    } else {
        // Mobile screen logic
        console.log("Mobile View");
        show(heroMobile)
        hide(heroDesktop)
        if (container.classList?.contains("desktop")) {
            container.classList?.remove("desktop")
        }
    }
}

// Add the event listener
isDesktop.addEventListener("change", handleMediaChange);

// For Submission logic
submitButton.addEventListener("click", handleSubmit)
// form.addEventListener("submit", handleSubmit)

// Initial check when the script loads
handleMediaChange(isDesktop);

// Form submission logic
function handleSubmit (event) {
    event.preventDefault()
    let email = emailInput.value.trim()

    if (email == "" || emailInput.matches(":invalid")) {
        invalidateForm()
    }
    else {
        validateForm()
    }
}

function invalidateForm () {
    if (emailInput.classList?.contains("invalid")) return
    emailInput.classList.add("invalid")
}
function validateForm () {
    if (!emailInput.classList?.contains("invalid")) return
    emailInput.classList.remove("invalid")
}