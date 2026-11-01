// Progressive enhancement: the page is fully readable without JS; this only powers the calculator.
(function () {
  var form = document.getElementById('calc');
  if (!form) return;
  var out = document.getElementById('out');
  var zh = document.documentElement.lang.indexOf('zh') === 0;
  var fmt = function (n) { return n.toLocaleString(zh ? 'zh-CN' : 'en-US', { maximumFractionDigits: 2 }); };
  function calc(e) {
    if (e) e.preventDefault();
    var v = function (id) { return parseFloat(form.elements[id].value); };
    var acct = v('acct'), risk = v('risk'), entry = v('entry'), stop = v('stop');
    var perShare = Math.abs(entry - stop);
    if (!(acct > 0 && risk > 0 && entry > 0 && perShare > 0)) {
      out.textContent = zh ? '请输入有效数字，且入场价 ≠ 止损价。' : 'Enter positive numbers and make sure entry ≠ stop-loss.';
      return;
    }
    var dollarRisk = acct * risk / 100;
    var shares = Math.floor(dollarRisk / perShare);
    var value = shares * entry;
    var pct = value / acct * 100;
    out.innerHTML = zh
      ? '风险金额 $' + fmt(dollarRisk) + ' · 买入 <strong>' + fmt(shares) + ' 股</strong> · 持仓市值 $' + fmt(value) + '（占账户 ' + fmt(pct) + '%）'
      : 'Risk $' + fmt(dollarRisk) + ' · Buy <strong>' + fmt(shares) + ' shares</strong> · Position value $' + fmt(value) + ' (' + fmt(pct) + '% of account)';
  }
  form.addEventListener('submit', calc);
  form.addEventListener('input', calc);
})();
