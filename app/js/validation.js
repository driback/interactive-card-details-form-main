import * as u from "./variable.js";

export function inputName() {
  u.formHolder.addEventListener("input", () => {
    if (u.formHolder.value) {
      u.formHolder.style.outline = "";
      valholder.style.display = "";
    }
    u.cardHolder.innerText = u.formHolder.value;
  });
}

export function inputNumber() {
  u.formNumber.addEventListener("input", () => {
    let formNumValue = u.formNumber.value;
    let formNumFormat = formNumValue.replace(/[^0-9]/g, "");
    let formNumMatch = formNumValue.match(/\w{1,4}/g);

    if (formNumMatch !== null) {
      formNumFormat = formNumMatch.join(" ");
    }

    if (formNumValue !== formNumFormat) {
      u.formNumber.value = formNumFormat;
    }

    if (formNumValue.length === 19) {
      u.formNumber.style.outline = "";
      valnum.style.display = "";
    }

    if (u.formNumber.value) {
      u.formNumber.style.outline = "";
      valnum.style.display = "";
    }

    u.cardNumber.innerText = u.formNumber.value;
  });
}

export function inputMonth() {
  u.formMonth.addEventListener("input", () => {
    let formMonValue = u.formMonth.value;
    let formMonFormat = formMonValue.match(/^[0-9]*$/g);

    if (formMonValue !== formMonFormat) {
      u.formMonth.value = formMonFormat;
    }

    if (formMonValue >= 12) {
      u.formMonth.value = 12;
    }

    if (u.formMonth.value) {
      u.formMonth.style.outline = "";
      valdate.style.display = "";
    }

    u.cardMonth.innerText = u.formMonth.value;
  });
}

export function inputYear() {
  u.formYear.addEventListener("input", () => {
    let formYearValue = u.formYear.value;
    let formYearFormat = formYearValue.match(/^[0-9]*$/g);

    if (formYearValue !== formYearFormat) {
      u.formYear.value = formYearFormat;
    }

    if (u.formYear.value) {
      u.formYear.style.outline = "";
      valdate.style.display = "";
    }

    u.cardYear.innerText = u.formYear.value;
  });
}
export function inputCvv() {
  u.formCvc.addEventListener("input", () => {
    let formCvcValue = u.formCvc.value;
    let formCvcFormat = formCvcValue.match(/^[0-9]*$/g);

    if (formCvcValue !== formCvcFormat) {
      u.formCvc.value = formCvcFormat;
    }

    if (u.formCvc.value) {
      u.formCvc.style.outline = "";
      valcvv.style.display = "";
    }

    u.cardCvv.innerText = u.formCvc.value;
  });
}
