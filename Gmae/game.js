var cookie = document.getElementById("cookie");
var clickCount = document.getElementById("clickCount");
var count = 0;

cookie.addEventListener("click", function() {
    count++;
    clickCount.textContent = count + " クッキー";
});

function enlargeCookie() {
  const cookieImage = document.querySelector(".cookie-image");
  cookieImage.classList.add("enlarged");
  setTimeout(() => {
    cookieImage.classList.remove("enlarged");
  }, 100);
}
