var form = document.getElementById("orderForm");
var result = document.getElementById("result");

if (form) {
  form.onsubmit = function (e) {
    e.preventDefault();

    var type = document.getElementById("clipType").value;
    var packs = parseInt(document.getElementById("packs").value) || 0;
    var delivery = document.getElementById("delivery").checked;

    var price = 0;
    if (type == "standard") price = 2.5;
    if (type == "colored")  price = 3.5;
    if (type == "giant")    price = 5.0;

    var total = packs * price;

    if (packs >= 100) {
      total = total - total * 0.1;
    }

    if (delivery) {
      total = total + 300;
    }

    // перезапуск анимации результата
    result.classList.remove("show");
    void result.offsetWidth; // трюк, чтобы анимация сработала заново

    result.innerHTML = "Итого к оплате: <b>" + total.toFixed(2) + " руб.</b>";
    result.classList.add("show");
  };
}