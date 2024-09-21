const inputElement = document.getElementById("email");
const buttonElement = document.getElementById("subscribe");
const dismissButtonElement = document.getElementById("dismiss");

const noEmailElement = document.getElementById("no-email");
const noValidEmailElement = document.getElementById("no-valid-email");

const mainSectionElement = document.getElementById("main-section");
const successSectionElement = document.getElementById("success-section");

const messageElement = document.getElementById('message');

let email = "";

buttonElement.addEventListener("click", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (inputElement.value === "") {
        noEmailElement.classList.remove('hidden');
        noValidEmailElement.classList.add('hidden');
    } else if (!emailRegex.test(inputElement.value)) {
        noEmailElement.classList.add('hidden');
        noValidEmailElement.classList.remove('hidden');
    } else {
        email = inputElement.value;
        messageElement.innerHTML = `<h1>Thanks for subscribing!</h1>

                        <div>A confirmation email has been sent to <strong>${email}</strong>.</div>
                        <div>Please open it and click the button inside to confirm your subscription.</div>`;
        mainSectionElement.classList.add('hidden');
        successSectionElement.classList.remove("hidden");
    }
})

dismissButtonElement.addEventListener('click', () => {
    messageElement.innerHTML = "";
    mainSectionElement.classList.remove('hidden');
    successSectionElement.classList.add("hidden");
    noEmailElement.classList.add('hidden');
    noValidEmailElement.classList.add('hidden');
    inputElement.value = "";
})