// Отслеживаем саму кнопку и контент по ID
const button = document.querySelector("#button");
const content = document.querySelector("#card");
// Отслеживаем клик по кнопке
button.addEventListener("click", function () {
  // Если в контенте есть класс неведимка, то текст кнопки будет "открыть"
  if (content.classList.toggle("card-hidden")) {
    button.textContent = "Open block";
    // Если нет, то текст кнопки будет "закрыть"
  } else {
    button.textContent = "Close block";
  }
});
