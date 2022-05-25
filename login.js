const idInput = document.getElementById("id");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login");
document.Cookies = "domain = hanagertrudekim.github.io";

let errNum = 0;

const saveId = () => {
  localStorage.setItem("ID", idInput.value);
  sessionStorage.setItem("ID", idInput.value);
  Cookies.set("ID", idInput.value, { expires: 3 });
};

const clickLogin = (e) => {
  e.preventDefault();
  if (idInput.value == "hana") {
    if (passwordInput.value == "0000") {
      alert("로그인이 되었어요!");
      localStorage.setItem("loginFlag", "logincheck");
      window.location.replace("complete.html");
    } else {
      alert("아이디와 비밀번호가 일치하지 않습니다.");
      errNum++;
    }
  } else {
    alert("존재하지 않는 계정입니다");
    errNum++;
  }
  if (errNum == 5) {
    Cookies.set("flag", "no", { expires: 0.046 });
  }
  if (Cookies.get("flag") == "no") {
    idInput.addEventListener("keydown", clickStopLogin);
    passwordInput.addEventListener("keydown", clickStopLogin);
  }
  saveId();
  idInput.value = "";
  passwordInput.value = "";
};

const clickStopLogin = () => {
  alert("1시간 뒤에 다시 시도해주세요.");
};

loginButton.addEventListener("click", clickLogin);
