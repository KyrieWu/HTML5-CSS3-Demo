function init(t) {
  t /= 4000; //速度，数值越大速度越快
  let c = document.querySelector("#canvas"),
    cc = c.getContext("2d"),
    w = (c.width = window.innerWidth),
    h = (c.height = window.innerHeight),
    increment = 20;
  // 在给定矩形内清空一个矩形
  cc.clearRect(0, 0, w, h);
  // 指定在图形重叠的地方，颜色由两种颜色值的相加值来决定
  cc.globalCompositeOperation = "lighter";

  for (let n = 0; n < 3; n++) {
    if (n == 0) {
      cc.fillStyle = "#f00";
    }

    if (n == 1) {
      cc.fillStyle = "#0f0";
    }

    if (n == 3) {
      cc.fillStyle = "#00f";
    }

    for (let i = 0; i < h; i += increment) {
      for (let j = 0; j < w / 2; j += increment) {
        let index = i * w + j;
        // 设置透明度
        cc.globalAlpha = Math.tan(index * index - t);
        // 填充矩形
        cc.fillRect(
          Math.tan(i * j - Math.sin(index + n / 100) + t) * j +
            w / 2 -
            increment / 2,
          i,
          ((Math.tan(index + i / j + t + n / 100) / 2) * increment) / 2,
          (Math.tan(index * index - t) * increment) / 2
        );
      }
    }
  }
  requestAnimationFrame(init);
}
init();
