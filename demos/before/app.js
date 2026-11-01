// BEFORE demo — client-side rendering only, loaded synchronously in <head>.
// Simulates a heavy framework bundle: blocks the main thread for ~900ms.
(function () {
  var t = Date.now();
  while (Date.now() - t < 900) { /* pretend to hydrate a big bundle */ }
})();

window.addEventListener('load', function () {
  // Content only appears after JS runs + an artificial API delay.
  setTimeout(function () {
    document.getElementById('root').innerHTML =
      '<div class="top">vexlora</div>' +
      '<div class="big">Vexlora Calc</div>' +
      '<img class="hero" src="hero.png">' +
      '<div class="box">' +
      '<div class="lbl">acct</div><input id="a" value="10000">' +
      '<div class="lbl">risk</div><input id="r" value="1">' +
      '<div class="lbl">in</div><input id="e" value="50">' +
      '<div class="lbl">sl</div><input id="s" value="48">' +
      '<div class="btn" onclick="calc()">GO</div>' +
      '<div class="res" id="out"></div>' +
      '</div>' +
      '<div class="box">Our tool helps traders. For more info <a href="page.html?id=2&amp;ref=home">click here</a>.</div>' +
      '<div class="foot">© vexlora</div>';
  }, 1500);
});

function calc() {
  var a = +document.getElementById('a').value, r = +document.getElementById('r').value,
      e = +document.getElementById('e').value, s = +document.getElementById('s').value;
  var n = Math.floor((a * r / 100) / Math.abs(e - s));
  document.getElementById('out').innerText = n + ' shares';
}
