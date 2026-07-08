const buttons = document.querySelectorAll(".type-btn");
const form = document.querySelector(".dynamicForm");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    loadForm(button.dataset.type);
  });
});

function loadForm(type) {
  switch (type) {
    case "website":
      form.innerHTML = `
                <label>Website Content</label>
                <input type="url"
                       id="qrInput"
                       placeholder="https://example.com">
            `;
      break;
    case "text":
      form.innerHTML = `
                <label>Enter Text</label>
                <textarea id="qrInput"
                          placeholder="Enter text"></textarea>
            `;
      break;
    case "phone":
      form.innerHTML = `
                <label>Phone Number</label>
                <input type="tel"
                       id="qrInput"
                       placeholder="+91XXXXXXXXXX">
            `;
      break;
    case "wifi":
      form.innerHTML = `
                <label>WiFi Name</label>
                <input id="ssid">

                <label>Password</label>
                <input id="password">
            `;
      break;
    case "location":
      form.innerHTML = `
                <label>Google Maps Link</label>
                <input id="qrInput"
                       placeholder="https://maps.google.com/...">
            `;
      break;
    case "email":
      form.innerHTML = `
        <label>Email Address</label>
        <input type="email"
               id="qrInput"
               placeholder="example@gmail.com">`;
      break;
  }
}
const generateBtn = document.querySelector(".generate-btn");
generateBtn.addEventListener("click", generateQR);

function generateQR() {
  const inputBox = document.getElementById("qrInput");

  if (!inputBox) {
    alert("Input field not found!");
    return;
  }

  const input = inputBox.value.trim();

  if (input === "") {
    alert("Please enter some data.");
    return;
  }

  const preview = document.getElementById("qrcode");
  preview.innerHTML = "";

  new QRCode(preview, {
    text: input,
    width: 220,
    height: 220,
  });
}
