let user = document.getElementById("username"),
    cardNum = document.getElementById("cardnumber"),
    month = document.getElementById("mm"),
    day = document.getElementById("yy"),
    cvc = document.getElementById("cvc"),
    submit = document.getElementById("submit"),
    inputs = document.querySelectorAll(".input input:not([type='submit'])")
    cvcNumOnImg = document.querySelector(".cvcnum"),
    cardNumOnImg = document.querySelector(".cardnum"),
    userNameOnImg = document.querySelector(".cardholder"),
    cardDate = document.querySelector(".carddate");

cardNum.addEventListener("keyup", () => {
  if (isNaN(cardNum.value.trim().split("").join(""))) {
    cardNum.parentElement.lastElementChild.textContent = "Wrong format, number only";
    cardNum.parentElement.lastElementChild.style.display = "block";
    cardNum.style.borderColor = "hsl(0, 100%, 66%)";
    cardNum.removeEventListener("blur", () => {
      cardNum.style.borderColor = "hsl(0, 100%, 66%)";
    })
  } else {
    cardNum.parentElement.lastElementChild.style.display = "none";
    cardNum.style.borderColor = "rgb(222, 221, 223)";
  }
})
inputs.forEach((input) => {
  input.addEventListener("keyup", () => {
      userNameOnImg.textContent = user.value.trim() == "" ? "Jane Appleseed": user.value;
      if (cardNum.value.trim().split("")[4] == " ") {
        cardNumOnImg.textContent = cardNum.value.trim() == "" ? "0000 0000 0000 0000": cardNum.value.trim().split("").length >= 4 ? cardNum.value.trim().split("").join("").match(/(.... ?)/g).join(" "): "0000 0000 0000 0000";
        cardNum.parentElement.lastElementChild.textContent = "";
        cardNum.style.borderColor = "rgb(222, 221, 223)";
      } else {
        cardNumOnImg.textContent = cardNum.value.trim() == "" ? "0000 0000 0000 0000": cardNum.value.trim().split("").length >= 4 ? cardNum.value.trim().split("").join("").match(/(....)/g).join(" "): "0000 0000 0000 0000";
      }
      cardDate.textContent = `${month.value.trim() == "" ? "00": month.value < 10 && month.value.trim().split("").length < 2 ? +"0"+ month.value: month.value}/${day.value == "" ? "00": day.value < 10 && day.value.trim().split("").length < 2 ? +"0"+ day.value: day.value}`;
      cvcNumOnImg.textContent = cvc.value.trim() == "" ? "000": cvc.value;
  })
})
document.forms[0].onsubmit = (event) => {
  event.preventDefault();
  inputs.forEach((input) => {
    if (input.value.trim() == "") {
      input.parentElement.lastElementChild.style.display = "block";
      input.style.borderColor = "hsl(0, 100%, 66%)";
    } else {
      input.parentElement.lastElementChild.style.display = "none";
      input.style.borderColor = "rgb(222, 221, 223)";
    }
    input.addEventListener("focus", () => {
      input.style.borderColor = "rgb(142, 133, 147)";
      input.parentElement.lastElementChild.style.display = "none";
    })
    input.addEventListener("blur", () => {
      input.style.borderColor = "rgb(222, 221, 223)";
    })
  })
  if (user.value.trim() != "" && cardNum.value.trim() != "" && month.value.trim() != "" && day.value.trim() != "" && cvc.value.trim() != "") {
    document.forms[0].classList.add("none");
    document.forms[1].classList.remove("none")
  }
}
document.forms[1].onsubmit = (event) => {
  event.preventDefault();
  document.forms[1].classList.add("none");
  document.forms[0].classList.remove("none");
  userNameOnImg.textContent = "Jane Appleseed";
  cardNumOnImg.textContent = "0000 0000 0000 0000";
  cardDate.textContent = "00/00";
  cvcNumOnImg.textContent = "000";
  inputs.forEach((input) => {
    input.value = ""
  })
}
