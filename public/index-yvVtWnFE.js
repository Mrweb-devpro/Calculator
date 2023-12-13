import "../src/styles/main.css";
(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) d(n);
  new MutationObserver((n) => {
    for (const i of n)
      if (i.type === "childList")
        for (const c of i.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && d(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(n) {
    const i = {};
    return (
      n.integrity && (i.integrity = n.integrity),
      n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function d(n) {
    if (n.ep) return;
    n.ep = !0;
    const i = a(n);
    fetch(n.href, i);
  }
})();
function m() {
  document.querySelector(".app").innerHTML = `
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
m();
let t, e, u;
const r = document.querySelector(".val-inp");
document.querySelectorAll(".num-btn").forEach((o) => {
  o.addEventListener("click", (s) => {
    s.preventDefault(), (r.value += o.getAttribute("data-num"));
  });
});
const b = document.querySelector(".result-inp");
document.querySelectorAll(".sign-btn").forEach((o) => {
  o.addEventListener("click", (s) => {
    s.preventDefault();
    const a = r.value.trim();
    (u = o.getAttribute("data-sign")),
      a &&
        (t
          ? ((e = Number(a)),
            (r.value = ""),
            u === "plus"
              ? (l(t.toString()), (t += e), console.log(t))
              : u === "minus"
              ? (l(t.toString()), (t -= e), console.log(t))
              : u === "times"
              ? (l(t.toString()), (t *= e), console.log(t))
              : u === "divide" && (l(t.toString()), (t /= e), console.log(t)))
          : ((t = Number(a)), (r.value = ""))),
      l(t.toString());
  });
});
const f = document.querySelector(".equate");
f.addEventListener("click", (o) => {
  o.preventDefault();
  const s = r.value.trim();
  u === "plus"
    ? ((e = Number(s)),
      (t += Number(e)),
      (e = void 0),
      (u = void 0),
      l(t.toString()))
    : u === "minus"
    ? ((u = void 0),
      (e = Number(s)),
      (t -= Number(e)),
      (e = void 0),
      l(t.toString()))
    : u === "times"
    ? ((u = void 0),
      (e = Number(s)),
      (t *= Number(e)),
      (e = void 0),
      l(t.toString()))
    : u === "divide" &&
      ((u = void 0),
      (e = Number(s)),
      (t /= Number(e)),
      (e = void 0),
      l(t.toString()));
});
document.querySelector(".clear-btn").addEventListener("click", (o) => {
  o.preventDefault(),
    (t = void 0),
    (u = void 0),
    (e = void 0),
    (r.value = ""),
    (b.value = "");
});
function l(o) {
  (b.value = o), (r.value = "");
}
