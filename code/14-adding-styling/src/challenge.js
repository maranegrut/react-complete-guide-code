class Foods {
  constructor(element, data) {
    this.element = element;
    this.data = data;
  }
  renderData() {
    const content = this.data.map((thing) => {
      return `<li class="food">${thing.image}</li>`;
    });
    this.element.innerHTML = content;
  }
  removeElement(target) {
    const updatedArray = this.data.filter((food) => food.image !== target);
    this.element.innerHTML = updatedArray;
  }
}
const rootElement = document.querySelector(".foods");
const food = document.querySelector(".food");
food.addEventListener("click", (e) => Foods.removeElement(e.target.value));
const foodData = [{}];

Foods(rootElement, foodData).renderData();
