const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const logOut = document.querySelector("#log-out")
logOut.addEventListener("click", function () {

  localStorage.removeItem(USERNAME_KEY);
  greeting.textContent = "";
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  logOut.classList.add(HIDDEN_CLASSNAME);
})

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username)
}

function paintGreetings(username) {
  greeting.textContent = `Hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
  logOut.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit)
} else {
  paintGreetings(savedUsername)
}