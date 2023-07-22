/**Variables */
/**Variables */
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let dayResult = document.getElementById("dayResult");
let monthResult = document.getElementById("monthResult");
let yearResult = document.getElementById("yearResult");
let form = document.querySelector(".sumbit_btn");
let reset = document.querySelector(".reset_container");
/* Creating Date f */
/* Creating Date f */
let date = new Date();
let getDate = date.getDate();
let getMonth = date.getMonth();
let getYear = date.getFullYear();
/**getting all the month */
/**getting all the month */
let allMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/**Click on the submit */

function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "this field is required.";
      validator = false;
    } else if (getMonth.value > 12) {
      getMonth.style.borderColor = "red";
      getMonth.parentElement.querySelector("small").innerText =
        "must be valid month.";
      validator = false;
    } else if (getDate.value > 31) {
      getDate.style.borderColor = "red";
      getDate.parentElement.querySelector("small").innerText =
        "must be valid day.";
      validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}

form.addEventListener("click", (e) => {
  e.preventDefault();
  if (validate()) {
    if (day.value > getDate) {
      getDate = getDate + getMonth[getMonth - 1];
      getMonth = getMonth - 1;
    }
    if (month.value > getMonth) {
      getMonth = getMonth + 12;
      getYear = getYear - 1;
    }
    const d = getDate - day.value;
    const m = getMonth - month.value;
    const y = getYear - year.value;
    dayResult.innerHTML = d;
    monthResult.innerHTML = m;
    yearResult.innerHTML = y;
  }
});
/**click on the reset */
/**validation */
/**Reset btn */
reset.addEventListener("click", () => {
  window.addEventListener("load", () => {
    console.log("page is fully loaded");
  });
});
