export default class Screen {
  element;

  constructor(id) {
    this.element = document.getElementById(id);
  }

  show() {
    this.element.style.display = "block";
  }

  hide() {
    this.element.style.display = "none";
  }
}
