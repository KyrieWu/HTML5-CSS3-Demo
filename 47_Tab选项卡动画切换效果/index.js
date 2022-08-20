const items = document.querySelectorAll(".item");
const sections = document.querySelectorAll("section");

// 移除选中态
function removeActive() {
  items.forEach((item) => {
    item.classList.remove("active");
  });

  sections.forEach((item) => {
    item.classList.remove("active");
  });
}

items.forEach((item, index) => {
  item.addEventListener("click", function () {
    removeActive();
    item.classList.add("active");
    sections[index].classList.add("active");
  });
});
