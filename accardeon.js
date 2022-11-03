// Отслеживаем загаловки через data атрибут
const headers = document.querySelectorAll("[data-name='accordeon-title']");
// Обходим каждый заголовок
headers.forEach(function (items) {
  // Отслеживаем клик по items(заголовку)
  items.addEventListener("click", function () {
    // Убирается/приписывается класс невидимка по клику
    // Все действия происходят над следующим элеметом
    this.nextElementSibling.classList.toggle("list-content");
  });
});
