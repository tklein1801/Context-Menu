class ContextMenu {
  constructor(elementId) {
    this.menuId = elementId;
    this.version = "1.0";
  }

  init() {
    console.log(`[CM] v${this.version} is enabled!`);
    let active = false;
    const menu = document.querySelector(this.menuId),
      width = menu.offsetWidth,
      height = menu.offsetHeight;
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      if (active == false) {
        const padding = 10;
        let x = e.clientX,
          y = e.clientY;
        if (x < padding) x = padding;
        let maxX = window.innerWidth - width - padding;
        if (x > maxX) x = maxX;
        if (y < padding) y = padding;
        let maxY = window.innerHeight - height - padding;
        if (y > maxY) y = maxY;
        menu.style.left = `${x}px`;
        menu.style.top = `${y}px`;
        menu.classList.add("show");
        active = !active;
      } else {
        menu.classList.remove("show");
        active = false;
      }
    });
    document.body.addEventListener("click", function () {
      menu.classList.remove("show");
      active = false;
    });
    window.addEventListener("scroll", function () {
      menu.classList.remove("show");
      active = false;
    });
  }
}
