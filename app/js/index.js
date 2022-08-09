import { blank, date, wrongFormatt, wrongFormattDate } from "./function.js";
import {
  inputName,
  inputNumber,
  inputMonth,
  inputYear,
  inputCvv,
} from "./validation.js";
import {
  formHolder,
  formNumber,
  formMonth,
  formYear,
  formCvc,
  button,
} from "./variable.js";

import { holder, cardDetails } from "./card.js";

holder();
inputName();
inputNumber();
inputMonth();
inputYear();
inputCvv();

button.addEventListener("click", (e) => {
  const formHolderValue = formHolder.value;
  const formNumberValue = formNumber.value;
  const formCvcValue = formCvc.value;
  const formMonthValue = formMonth.value;
  const formYearValue = formYear.value;
  const letters = /^[a-zA-Z ]*$/g;
  const numbers = /^[0-9 ]*$/g;

  e.preventDefault();

  //Name Holder
  if (formHolderValue === "" || formHolderValue === null) {
    blank(valholder, formHolder, "Can't be blank");
    // console.log("click");
  } else if (!formHolderValue.match(letters)) {
    wrongFormatt(formHolder, valholder, "alphabets");
    // console.log("not match");
  }

  //Number
  if (formNumberValue === "" || formNumberValue === null) {
    blank(valnum, formNumber, "Can't be blank");
  }
  if (formNumberValue.length >= 1 && formNumberValue.length <= 18) {
    blank(valnum, formNumber, "The number must be 16 digit");
  }
  if (!formNumberValue.match(numbers)) {
    wrongFormatt(formNumber, valnum, "numbers");
  }

  //Date

  const today = new Date();
  const year = today.getFullYear().toString().substring(2);
  if (
    formMonthValue === "" ||
    formMonthValue === null ||
    formYearValue === "" ||
    formYearValue === null
  ) {
    date(valdate, formMonth, formYear, "Can't be blank");
  }

  if (!formMonthValue.match(numbers) || !formYearValue.match(numbers)) {
    wrongFormattDate(formMonth, formYear, valdate, "numbers");
  }

  if (formYear.value >= 1 && formYearValue <= year - 1) {
    date(valdate, formMonth, formYear, "Your card is expired");
    console.log("Your card is expired");
  }

  //CVV
  if (formCvcValue === "" || formCvcValue === null) {
    blank(valcvv, formCvc, "Can't be blank");
  }

  if (formCvcValue.length >= 1 && formCvcValue.length <= 2) {
    blank(valcvv, formCvc, "Must be 3 digits");
  }

  //True
  if (
    formHolderValue &&
    formNumberValue.length == 19 &&
    formYearValue >= year &&
    formCvcValue.length >= 2
  ) {
    cardDetails.push({
      name: formHolderValue,
      number: formNumberValue,
      date: {
        month: formMonthValue,
        year: formYearValue,
      },
      cvv: formCvcValue,
    });

    formcard.style.display = "none";
    complete.style.display = "flex";

    // console.log(cardDetails.length - 1);
  } else {
    console.log("false");
  }
});
