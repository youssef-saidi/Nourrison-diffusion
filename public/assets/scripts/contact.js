"use strict";
window.addEventListener("DOMContentLoaded", () => {
    // contact form
    const form = document.querySelector("#contact-form");
    const formElements = form.elements;
    const successCard = document.querySelector("#success-card");
    const errorCard = document.querySelector("#error-card");

    // trim inputs value on change
    document
        .querySelectorAll("input")
        .forEach((el) =>
            el.addEventListener(
                "change",
                (e) => (e.target.value = e.target.value.trim())
            )
        );

    const submitContactForm = (e) => {
        e.preventDefault();
        grecaptcha.ready(() => {
            grecaptcha.execute("6LdQZb0aAAAAAIZ1nlXNG0QoTrw9_FLYJH1GNajZ", { action: 'submit' }).then(async(token) => {
                const submitBtn = formElements[7];
                const values = {
                    firstName: formElements[0].value,
                    lastName: formElements[1].value,
                    company: formElements[2].value,
                    email: formElements[3].value,
                    phoneNumber: formElements[4].value,
                    address: formElements[5].value,
                    message: formElements[6].value,
                    captchaToken: token
                };
                submitBtn.classList.add("loading");
                submitBtn.disabled = true;
                errorCard.classList.add("hidden");

                try {
                    const res = await axios.post("/contact", values);
                    form.remove();
                    successCard.classList.remove("hidden");
                } catch (err) {
                    console.log(err);
                    errorCard.classList.remove("hidden");
                }

                submitBtn.classList.remove("loading");
                submitBtn.disabled = false;
            });
        });
    }
    form.addEventListener("submit", submitContactForm);
});