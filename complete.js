const hello = document.getElementById("hello");
const logoutButton = document.getElementById("logout");
const name = Cookies.get("username");
hello.innerText = `안녕하세요. ${name}님!`;

logoutButton.onclick = function () {
  localStorage.clear();
  sessionStorage.clear();
  Cookies.remove("ID");
  Cookies.remove("username");
  Cookies.remove("loginflag");
  window.location.replace("index.html");
};
