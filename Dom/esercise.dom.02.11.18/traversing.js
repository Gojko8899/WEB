function traverse() {
  var element = document.querySelector(".active");
  element.className = "";

  element.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.className =
    "active";
}
traverse();
