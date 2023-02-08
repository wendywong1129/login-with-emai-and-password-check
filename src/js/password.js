export const password = document.getElementById("password");
// const passwordToggle = document.getElementsByClassName("password_icon")[0];
export const passwordToggle = document.querySelector(".password_icon");

// console.log(password);
// console.log(passwordToggle);

passwordToggle.addEventListener("click", () => {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    // 进行添加类名的操作时，先移除类名，再添加类名，确保不会重复添加
    passwordToggle.classList.remove("show");
    passwordToggle.classList.add("show");
  } else {
    password.setAttribute("type", "password");
    passwordToggle.classList.remove("show");
  }
});

password.addEventListener("keyup", () => {
  // console.log(password.value);
  checkPassword(password.value);
});

function checkPassword(info) {
  const passwordMsg = document.getElementById("password_msg");
  passwordMsg.textContent = "Need ";

  // ?匹配前面表达式，?=前面表达式是什么，.除换行符之外的任一字符，*匹配次数不限，[]表示范围
  const lowerCase = new RegExp("(?=.*[a-z])");
  const upperCase = new RegExp("(?=.*[A-Z])");
  const number = new RegExp("(?=.*[0-9])");
  const special = new RegExp("(?=.*[!@#$%^&*])");
  // {}匹配长度
  const length = new RegExp("(?=.{8,})");

  let errorFlag = false;

  if (!lowerCase.test(info)) {
    passwordMsg.textContent += "lower case ";
    errorFlag = true;
  }
  if (!upperCase.test(info)) {
    passwordMsg.textContent += "upper case ";
    errorFlag = true;
  }
  if (!number.test(info)) {
    passwordMsg.textContent += "number ";
    errorFlag = true;
  }
  if (!special.test(info)) {
    passwordMsg.textContent += "special character ";
    errorFlag = true;
  }
  if (!length.test(info)) {
    passwordMsg.textContent += "at least 8 characters ";
    errorFlag = true;
  }

  const passwordGroup = document.getElementById("password_group");
  // flag为true，说明输入的密码字符串不匹配以上某个或者多个格式
  if (errorFlag) {
    passwordGroup.classList.remove("success");
    passwordGroup.classList.add("error");
  } else {
    passwordMsg.textContent = "valid password";
    passwordGroup.classList.add("success");
    passwordGroup.classList.remove("error");
  }
}
