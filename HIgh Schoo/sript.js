let loginBtn = document.getElementById("login-btn");
let email = document.getElementById("e-mail");
let password = document.getElementById("password");
let passwordRegex =
  /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;
let mailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

function changeElementStyle(elementId, borderColor, backgroundColor) {
  document.getElementById(elementId).style.border = borderColor;
  document.getElementById(elementId).style.backgroundColor = backgroundColor;
}

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(mailRegex.test(email.value));
  console.log(passwordRegex.test(password.value));

  if (!mailRegex.test(email.value) || !passwordRegex.test(password.value)) {
    changeElementStyle("password", "2px Solid red", "#ff9999");
    changeElementStyle("e-mail", "2px Solid red", "#ff9999");
    document.getElementsByName("password")[0].placeholder = "Invalido";
    document.getElementsByName("e-mail")[0].placeholder = "Invalido";
    document.getElementById("password").style.color = "#d70000";
    document.getElementById("e-mail").style.color = "#d70000";
  } else if (!mailRegex.test(email.value)) {
    changeElementStyle("password", "2px Solid green", "#ff9999");
    changeElementStyle("e-mail", "2px Solid red", "#ff9999");
    document.getElementsByName("password")[0].placeholder = "";
    document.getElementsByName("e-mail")[0].placeholder = "Invalido";
    document.getElementById("password").style.color = "#d70000";
    document.getElementById("e-mail").style.color = "#d70000";
  } else if (!passwordRegex.test(password.value)) {
    changeElementStyle("password", "2px Solid red", "#ff9999");
    changeElementStyle("e-mail", "2px Solid green", "#ff9999");
    document.getElementsByName("password")[0].placeholder = "Invalido";
    document.getElementsByName("e-mail")[0].placeholder = "";
    document.getElementById("password").style.color = "#d70000";
    document.getElementById("e-mail").style.color = "#d70000";
  }
});
