export function blank(id, input, comment) {
  input.style.outline = "1px solid red";
  id.style.display = "block";
  id.innerText = comment;
}

export function date(id, a, b, comment) {
  a.style.outline = "1px solid red";
  b.style.outline = "1px solid red";
  id.style.display = "block";
  id.innerText = comment;
}

export function wrongFormatt(i, e, o) {
  i.style.outline = "1px solid red";
  e.style.display = "block";
  e.innerText = `Wrong format, ${o} only`;
  return false;
}

export function wrongFormattDate(i, l, e, o) {
  i.style.outline = "1px solid red";
  l.style.outline = "1px solid red";
  e.style.display = "block";
  e.innerText = `Wrong format, ${o} only`;
  return false;
}
