const mobileButton = document.querySelector(".header_burger");
const navigation = document.querySelector(".header_navigation-burger");
const overlay = document.querySelector(".overlay");
const body = document.body;

function disableScroll() {
  body.classList.contains("dis-scroll")
    ? body.classList.remove("dis-scroll")
    : body.classList.add("dis-scroll");
}
mobileButton.addEventListener("click", () => {
  mobileButton.classList.toggle("active");
  navigation.classList.toggle("header_nav-visible");
  overlay.classList.toggle("overlay-visible");
});
