const hello = document.getElementById("hello");
const logoutButton = document.getElementById("logout");
const name = localStorage.getItem("ID");

if (localStorage.getItem("loginFlag") === "true") {
  hello.innerText = `안녕하세요. ${name}님!`;
} else {
  alert("접근할수없는 사용자입니다.");
  window.location.replace("index.html");
}

logoutButton.onclick = function () {
  localStorage.clear();
  sessionStorage.clear();
  Cookies.remove("ID");
  Cookies.remove("username");
  window.location.replace("index.html");
};
