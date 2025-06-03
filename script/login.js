function getUsers() {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : {};
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  errorMsg.textContent = "";

  const validUsername = "admin";
  const validPassword = "123456";

  const users = getUsers();

  if ((username === validUsername && password === validPassword) ||
      (users[username] && users[username] === password)) {
    window.location.href = "alfUnit.html";
  } else {
    errorMsg.textContent = "Username atau password salah.";
  }
}