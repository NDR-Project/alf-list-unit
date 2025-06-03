const secretCode = "ejagantenk"; 

function getUsers() {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : {};
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function register() {
  const username = document.getElementById("regUsername").value.trim();
  const password = document.getElementById("regPassword").value.trim();
  const secret = document.getElementById("regSecret").value.trim();
  const errorMsg = document.getElementById("error-msg");
  const successMsg = document.getElementById("success-msg");

  errorMsg.textContent = "";
  successMsg.textContent = "";

  if (!username || !password || !secret) {
    errorMsg.textContent = "Semua kolom harus diisi!";
    return;
  }

  if (secret !== secretCode) {
    errorMsg.textContent = "Kode rahasia salah!";
    return;
  }

  const users = getUsers();
  if (users[username]) {
    errorMsg.textContent = "Username sudah digunakan!";
    return;
  }

  users[username] = password;
  saveUsers(users);

  successMsg.textContent = "Akun berhasil dibuat!";
  document.getElementById("regUsername").value = "";
  document.getElementById("regPassword").value = "";
  document.getElementById("regSecret").value = "";
}