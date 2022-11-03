// Отслеживаем заголовки табов и их контенты через data атрибут
const tabHeaders = document.querySelectorAll("[data-tab]");
const contentsTab = document.querySelectorAll("[data-tab-content]");
// Обходим заголовки табов
tabHeaders.forEach(function (item) {
  // По item(заголовок таба) делаем событие по клику(клик по заголовку)
  item.addEventListener("click", function () {
    // Отслеживаем таб контент у этого заголовка(на которое нажали)
    const tabContent = document.querySelector("#" + this.dataset.tab);
    // Обходим контенты табов
    contentsTab.forEach(function (items) {
      // Добавляем им всем класс невидимку
      items.classList.add("hidden-tab");
    });
    // у таб контента(тот на который нажали) убираем класс невидимку
    tabContent.classList.remove("hidden-tab");
  });
});
