var cookie = document.getElementById("cookie");
var clickCount = document.getElementById("clickCount");
var count = 0;

cookie.addEventListener("click", function() {
    count++;
    clickCount.textContent = count + " クッキー";
});