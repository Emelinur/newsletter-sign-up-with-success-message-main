const newsletterForm = document.querySelector("#newsletter_form");
const emailInput = document.querySelector(".email_input");
const errorMsg = document.querySelector(".error-msg");
const successMessage = document.querySelector(".card_success_message");
const card = document.querySelector(".card");
const placeholderText = document.querySelector(".placeholderText");
const successBtn = document.querySelector(".success_btn");

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = emailInput.value;
  console.log(inputValue);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  console.log(emailPattern.test(inputValue));
  if (inputValue == "" || !emailPattern.test(inputValue)) {
    errorMsg.style.display = "flex";
    emailInput.classList.add("error");
  } else {
    successMessage.style.display = "flex";
    card.style.display = "none";
    placeholderText.textContent = inputValue;
  }
});
successBtn.addEventListener("click", () => {
  successMessage.style.display = "none";
  card.style.display = "";
  emailInput.value = "";
  emailInput.classList.remove("error");
  errorMsg.style.display = "none";

});
