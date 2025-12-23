let minus = document.querySelector("#minus");
let reset = document.querySelector("#reset");
let plus = document.querySelector("#plus");
let counter = document.querySelector("#count");

minus.addEventListener("click", () => {
  let t = Number(counter.innerText);

  if (t > 0) {
    counter.innerText = t - 1;
  } else {
    alert("YOU CAN'T GO LESS THAN 0");
  }
});

reset.addEventListener("click", () => {
  counter.innerText = 0;
});

plus.addEventListener("click", () => {
  let t = Number(counter.innerText);
  counter.innerText = t + 1;
});

