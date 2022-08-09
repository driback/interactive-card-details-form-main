import {
  cardHolder,
  cardNumber,
  cardMonth,
  cardYear,
  cardCvv,
} from "./variable.js";

export let cardDetails = [
  {
    name: "JANE APPLESEED",
    number: "0000000000000000",
    date: {
      month: "00",
      year: "00",
    },
    cvv: "000",
  },
];

export function holder() {
  if (cardHolder.innerText == "") {
    cardHolder.innerText = cardDetails[0].name;
  }
  if (cardNumber.innerText == "") {
    cardNumber.innerText = cardDetails[0].number.match(/\w{1,4}/g).join(" ");
  }
  if (cardMonth.innerText == "") {
    cardMonth.innerText = cardDetails[0].date.month;
  }
  if (cardYear.innerText == "") {
    cardYear.innerText = cardDetails[0].date.year;
  }
  if (cardCvv.innerText == "") {
    cardCvv.innerText = cardDetails[0].cvv;
  }
}

console.log(cardDetails);
