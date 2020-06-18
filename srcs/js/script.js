let password = document.getElementById("password");
let confirm_password = document.getElementById("password_repeat");

function validatePassword() {
  if (password.value !== password_repeat.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity("");
  }
}
password.oninput = validatePassword;
confirm_password.oninput = validatePassword;