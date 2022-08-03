// 获取要操作的元素
const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const final = document.querySelector(".final");
const replay = document.querySelector(".replay");

// 重置，重新开始
function reset() {
  counter.classList.remove("hide");
  final.classList.remove("show");
  nums.forEach((num) => {
    num.classList = "";
  });
  nums[0].classList.add("in");
}
// 开始倒计时
function run() {
  nums.forEach((num, index) => {
    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && index !== nums.length - 1) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        final.classList.add("show");
      }
    });
  });
}

replay.addEventListener("click", function () {
  reset();
  run();
});

run();
