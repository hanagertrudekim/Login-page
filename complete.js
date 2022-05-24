const hello = document.getElementById("hello");
const name = Cookies.get("username");
hello.innerText = `안녕하세요. ${name}님!`;

const logoutButton = document.getElementById("logout");

const clickLogout = () => {
  localStorage.clear();
  sessionStorage.clear();
  Cookies.remove("ID");
  Cookies.remove("flag");
  document.getElementById("logout").onclick = function () {
    document.location.herf = "index.html";
  };
};

logoutButton.addEventListener("click", clickLogout);
