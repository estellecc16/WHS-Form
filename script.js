const phoneRegex =
  /^(?:\+61|0)[2-478](?:[ -]?\d){8}$/;

const emailRegex =
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const abnRegex =
  /^\d{11}$/;

const phone =
  document.getElementById("phone");

const email =
  document.getElementById("email");

const abn =
  document.getElementById("abn");

const policyUpload =
  document.getElementById("policyUpload");

const policyFile =
  document.getElementById("policyFile");

const hsrArea =
  document.getElementById("hsrArea");

const hsrDetails =
  document.getElementById("hsrDetails");

const form =
  document.getElementById("safetyForm");

const maxFileSize = 5 * 1024 * 1024;


document
  .querySelectorAll('input[name="policy"]')
  .forEach(input => {

    input.addEventListener("change", () => {
      policyUpload.hidden =
        input.value !== "yes";
    });

  });


document
  .querySelectorAll('input[name="hsr"]')
  .forEach(input => {

    input.addEventListener("change", () => {
      hsrArea.hidden =
        input.value !== "yes";
    });

  });


document

  .getElementById("toggleAbn")
  .addEventListener("click", function () {

    const hidden =
      abn.type === "password";

    abn.type =
      hidden ? "text" : "password";

    this.textContent =
      hidden ? "Hide" : "Show";

  });


form.addEventListener("submit", event => {

  event.preventDefault();

  let valid = true;

  document.getElementById("phoneError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("abnError").textContent = "";
  document.getElementById("fileError").textContent = "";
  document.getElementById("hsrError").textContent = "";
  document.getElementById("formMessage").textContent = "";


  if (
    phone.value.trim() &&
    !phoneRegex.test(phone.value.trim())
  ) {

    document.getElementById("phoneError").textContent =
      "Enter a valid Australian phone number.";

    valid = false;

  }


  if (!email.value.trim()) {

    document.getElementById("emailError").textContent =
      "Email is required.";

    valid = false;

  } else if (
    !emailRegex.test(email.value.trim())
  ) {
    document.getElementById("emailError").textContent =
      "Enter a valid email address.";
    valid = false;
  }

  abn.addEventListener("input", () => {
  abn.value = abn.value
    .replace(/\D/g, "")
    .slice(0, 11);
});


  const cleanABN =
    abn.value.replace(/\D/g, "");

  if (!cleanABN) {

    document.getElementById("abnError").textContent =
      "ABN is required.";

    valid = false;

  } else if (
    !abnRegex.test(cleanABN)
  ) {

    document.getElementById("abnError").textContent =
      "ABN must contain exactly 11 digits.";

    valid = false;

  }


  const policyYes =
    document.querySelector(
      'input[name="policy"][value="yes"]'
    ).checked;

  const maxFileSize =
    5 * 1024 * 1024;

  if (policyYes) {

    if (!policyFile.files.length) {

      document.getElementById("fileError").textContent =
        "Please attach a policy file.";

      valid = false;

    } else {

      const file =
        policyFile.files[0];

      const allowed =
        /\.(pdf|doc|docx)$/i;

      if (!allowed.test(file.name)) {

        document.getElementById("fileError").textContent =
          "Only PDF, DOC or DOCX files are allowed.";

        valid = false;

      } else if (file.size > maxFileSize) {

        document.getElementById("fileError").textContent =
          "The file must be smaller than 5 MB.";

        valid = false;

      }

    }

}


  const hsrYes =
    document.querySelector(
      'input[name="hsr"][value="yes"]'
    ).checked;

  if (
    hsrYes &&
    !hsrDetails.value.trim()
  ) {

    document.getElementById("hsrError").textContent =
      "Please provide HSR details.";

    valid = false;

  }


  if (
    typeof grecaptcha !== "undefined" &&
    !grecaptcha.getResponse()
  ) {

    document.getElementById("formMessage").textContent =
      "Please complete the reCAPTCHA.";

    valid = false;

  }


  if (valid) {

    document.getElementById("formMessage").textContent =
      "Form validated successfully.";

  }

});