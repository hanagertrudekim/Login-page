const idInput = document.getElementById("id");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login");
const logoutButton = document.getElementById("logout");
let errNum = 0;
let idKey = 1;

const saveId = () => {
  localStorage.setItem("ID" + idKey, idInput.value);
  sessionStorage.setItem("ID" + idKey, idInput.value);
  Cookies.set("ID" + idKey, idInput.value, { expires: 3 });
  idKey++;
};

const clickLogin = (a) => {
  a.preventDefault();
  if (idInput.value == "hana") {
    if (passwordInput.value == "0000") {
      // 로그인 되었을때 바뀌는 창(로그인 되었습니다! + logout 버튼)
      alert("로그인이 되었어요!");
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
    alert("안돼!");
  }
  saveId();
  idInput.value = "";
  passwordInput.value = "";
};

const clickLogout = () => {
  localStorage.clear();
  sessionStorage.clear();
  Cookies.remove("ID");
  Cookies.remove("flag");
};

loginButton.addEventListener("click", clickLogin);
logoutButton.addEventListener("click", clickLogout);
