export const email = document.getElementById("email");
// console.log(email);

email.addEventListener("keyup", () => {
  // console.log(email.value);
  checkEmail(email.value);
});

function checkEmail(info) {
  const emailMsg = document.getElementById("email_msg");

  const emailFormat = new RegExp(
    "^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$"
  );

  const emailGroup = document.getElementById("email_group");

  if (emailFormat.test(info)) {
    emailMsg.textContent = "valid email";
    emailGroup.classList.add("success");
    emailGroup.classList.remove("error");
  } else {
    emailMsg.textContent = "Invalid email ";
    emailGroup.classList.remove("success");
    emailGroup.classList.add("error");
  }
}
