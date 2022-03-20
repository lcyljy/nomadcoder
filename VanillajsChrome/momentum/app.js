const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function onLoginBtnClick() {
  const value = loginInput.value;
  if (value === "") {
    alert("Please write your name");
  } else {
    console.log("click!!!", value);
  }

}

loginButton.addEventListener("click", onLoginBtnClick);