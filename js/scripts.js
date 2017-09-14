var link = document.querySelector(".form-header");
var popup = document.querySelector(".search-form");
var dateIn = popup.querySelector("[name=date-in]");
var dateOut = popup.querySelector("[name=date-out]");
var adultCount = popup.querySelector("[name=adult-count]");
var childCount = popup.querySelector("[name=child-count]");
/*var close = popup.querySelector(".modal-close");*/
popup.classList.add("form-close");

link.addEventListener("click", function (evt) {
  /*evt.preventDefault();*/
  if (popup.classList.contains("form-close")) {
    popup.classList.remove("form-error");
    popup.classList.remove("form-close");
    popup.classList.add("form-show");
    dateIn.focus();
  }
  else {
    popup.classList.remove("form-show");
    popup.classList.add("form-close");
    link.focus();
  }
});

popup.addEventListener("submit", function (evt) {
  if (!dateIn.value || !dateOut.value ||
      !adultCount.value || !childCount.value) {
    evt.preventDefault();
    popup.classList.remove("form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("form-error");
    /*console.log("Нужно заполнить все поля!");*/
  }
});
