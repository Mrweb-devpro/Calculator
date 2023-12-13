"use strict";
import "./styles/main.css";

function initApp() {
  document.querySelector<HTMLDivElement>(".app")!.innerHTML = `
  <h1>Calculator</h1>
<section class="section-display">
<input name="" id="inp"  class="val-inp" type="number" placeholder="eg: 1050" />
<input type="text" class="result-inp" readonly   placeholder="result:" />
<button class="clear-btn">Clear</button>
</section>
<hr/>
<section class="section-btn">
<div class="num-btn-cont">
<button class="num-btn" data-num="0">0</button>
  <button class="num-btn" data-num="1">1</button>
  <button class="num-btn" data-num="2">2</button>
  <button class="num-btn" data-num="3">3</button>
  <button class="num-btn" data-num="4">4</button>
  <button class="num-btn" data-num="5">5</button>
  <button class="num-btn" data-num="6">6</button>
  <button class="num-btn" data-num="7">7</button>
  <button class="num-btn" data-num="8">8</button>
  <button class="num-btn" data-num="9">9</button>
</div>
<div class="sign-btn-cont">
  <button class="sign-btn" data-sign="times">&times;</button>
  <button class="equate" data-sign="equals">&equals;</button>
  <button class="sign-btn" data-sign="plus">&plus;</button>
  <button class="sign-btn" data-sign="divide">&divide;</button>
  <button class="sign-btn" data-sign="minus">&minus;</button>
</div>
</section>
`;
}
initApp();
let initVal: number | undefined,
  finalVAl: number | undefined,
  currentSign: string | undefined;

const input = document.querySelector<HTMLInputElement>(".val-inp")!;
document.querySelectorAll(".num-btn").forEach((btn: Element) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    input.value += btn.getAttribute("data-num")!;
  });
});

const result = document.querySelector<HTMLInputElement>(".result-inp")!;
document.querySelectorAll(".sign-btn").forEach((btn: Element) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const inpVal = input.value.trim();
    currentSign = btn.getAttribute("data-sign")!;
    if (inpVal) {
      if (initVal) {
        finalVAl = Number(inpVal);
        input.value = "";
        if (currentSign === "plus") {
          sendResult(initVal.toString());
          initVal += finalVAl;
          console.log(initVal);
        } else if (currentSign === "minus") {
          sendResult(initVal.toString());
          initVal -= finalVAl;
          console.log(initVal);
        } else if (currentSign === "times") {
          sendResult(initVal.toString());
          initVal *= finalVAl;
          console.log(initVal);
        } else if (currentSign === "divide") {
          sendResult(initVal.toString());
          initVal /= finalVAl;
          console.log(initVal);
        }
      } else {
        initVal = Number(inpVal);
        input.value = "";
      }
    }
    sendResult(initVal!.toString());

    // initVal = Number(inpVal);
  });
});

const equateBtn = document.querySelector<HTMLButtonElement>(".equate")!;

equateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inpVal = input.value.trim();
  if (currentSign === "plus") {
    finalVAl = Number(inpVal);
    initVal! += Number(finalVAl);
    finalVAl = undefined;
    currentSign = undefined;
    // console.log(initVal);
    sendResult(initVal!.toString());
  } else if (currentSign === "minus") {
    currentSign = undefined;
    finalVAl = Number(inpVal);
    initVal! -= Number(finalVAl);
    finalVAl = undefined;
    // console.log(initVal);
    sendResult(initVal!.toString());
  } else if (currentSign === "times") {
    currentSign = undefined;
    finalVAl = Number(inpVal);
    initVal! *= Number(finalVAl);
    finalVAl = undefined;
    // console.log(initVal);
    sendResult(initVal!.toString());
  } else if (currentSign === "divide") {
    currentSign = undefined;
    finalVAl = Number(inpVal);
    initVal! /= Number(finalVAl);
    finalVAl = undefined;
    // console.log(initVal);
    sendResult(initVal!.toString());
  }
});

document
  .querySelector<HTMLButtonElement>(".clear-btn")!
  .addEventListener("click", (e) => {
    e.preventDefault();
    initVal = undefined;
    currentSign = undefined;
    finalVAl = undefined;
    input.value = "";
    result.value = "";
  });

// utiliy
function sendResult(res: string) {
  result.value = res;
  input.value = "";
}
