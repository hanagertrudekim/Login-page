const hello = document.getElementById("hello");
const logoutButton = document.getElementById("logout");
const name = localStorage.getItem("ID");

if (localStorage.getItem("loginFlag") == "logincheck") {
  hello.innerText = `안녕하세요. ${name}님!`;

  logoutButton.onclick = function () {
    localStorage.clear();
    sessionStorage.clear();
    Cookies.remove("ID");
    Cookies.remove("username");
    Cookies.remove("loginflag");
    window.location.replace("index.html");
  };
} else {
  window.location.replace("index.html");
}
