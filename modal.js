// Отслеживаем кнопки открытия/закрытия модалок и все модальные окна
const buttonOpenModals = document.querySelectorAll("[data-modal-open]");
const buttonCloseModals = document.querySelectorAll("[data-modal-close]");
const allModals = document.querySelectorAll("[data-modal-window]");
// Обходим кнопки открытия модалок
buttonOpenModals.forEach(function (opener) {
  // По opener'у(кнопка открытия) отслеживаем клик
  opener.addEventListener("click", function () {
    // Отслеживаем открываемую модалку
    const openModal = document.querySelector("#" + this.dataset.modalOpen);
    // Убираем класс невидимку у этой модалки
    openModal.classList.remove("hidden-parentblock");
    // (Это нужно для фейда)
    // Запрет закрывания окна, если нажатие было в контенте модалки
    openModal
      .querySelector(".modal-content")
      .addEventListener("click", function (stoper) {
        stoper.stopPropagation();
      });
  });
});
// Закрытие по нажатию на кнопку закрытия
// Обходим кнопки закрытия модалок
buttonCloseModals.forEach(function (closer) {
  // По closer'у(кнопка закрытия) отслеживаем клик
  closer.addEventListener("click", function () {
    // Отслеживаем закрываемое окно
    const closeModal = this.closest("[data-modal-window]");
    // Добавляем класс невидимку
    closeModal.classList.add("hidden-parentblock");
  });
});
// Закрытие по фейду(нажатие вне контента модалки)
// Обходим все модалки
allModals.forEach(function (fade) {
  // По fade отслеживаем клик
  fade.addEventListener("click", function () {
    // Добавляем по нажатию класс невидимку
    this.classList.add("hidden-parentblock");
  });
});
