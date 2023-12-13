(function () {
  const mobileButtonMenu = document.querySelector(".header_burger");
  const menuLinks = document.querySelectorAll(".header_link");
  mobileButtonMenu.addEventListener("click", () => {
    mobileButtonMenu.classList.add("active span");
  });
  mobileButtonMenu.addEventListener("click", () => {
    mobileButtonMenu.classList.remove(".active span");
  });

  if (window.innerHeight <= 1024) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener("click", () => {
        mobileButtonMenu.classList.remove(".active span");
      });
    }
  }
})();
