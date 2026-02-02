let submitButton = document.querySelector("form button");
let emailInput = document.querySelector("#email");

// For Submission logic
submitButton.addEventListener("click", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let email = emailInput.value.trim();

  if (email == "" || emailInput.matches(":invalid")) {
    invalidateForm();
  } else {
    validateForm();
  }
}

function invalidateForm() {
  if (emailInput.classList?.contains("invalid")) return;
  emailInput.classList.add("invalid");
}

function validateForm() {
  if (!emailInput.classList?.contains("invalid")) return;
  emailInput.classList.remove("invalid");
}
