new Vue({
  el: "#app",
  data: {
    timer: null, //定时器
    active_index: 0, //当前轮播下标
    active_image: "./imgs/1.jpg", //当前轮播背景图
    active_color: "#53839a", //当前轮播背景色
    size: 6, //轮播图数量
    // banner数据（json格式）
    list: [
      {
        title: "正在直播NBA",
        sub_title: "快船vs森林狼",
        image: "./imgs/1.jpg",
        bg_color: "#53839a",
      },
      {
        title: "特战荣耀·热播",
        sub_title: "杨洋展特种军魂",
        image: "./imgs/2.jpg",
        bg_color: "#bbbbaf",
      },
      {
        title: "王牌对王牌7",
        sub_title: "沈腾贾玲cos喜羊羊",
        image: "./imgs/3.jpg",
        bg_color: "#120f16",
      },
      {
        title: "军火大劫案",
        sub_title: "国版“史密斯夫妇”燃炸",
        image: "./imgs/4.jpg",
        bg_color: "#600004",
      },
      {
        title: "毛雪汪",
        sub_title: "李雪琴花式夸毛不易新歌",
        image: "./imgs/5.jpg",
        bg_color: "#eeec88",
      },
      {
        title: "狙击手的战争",
        sub_title: "乌克兰战争狙击手传奇",
        image: "./imgs/6.jpg",
        bg_color: "#89a1a3",
      },
    ],
  },
  methods: {
    stopAutoPlay() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
    startAutoPlay() {
      let _t = this;
      this.timer = setInterval(() => {
        _t.active_index++;
        if (_t.active_index > _t.size - 1) {
          _t.active_index = 0;
        }
        _t.changeBanner(_t.active_index);
      }, 3000);
    },
    changeBanner(index) {
      this.stopAutoPlay();
      this.active_index = index;
      this.active_image = this.list[index].image;
      this.active_color = this.list[index].bg_color;
      this.startAutoPlay();
    },
  },
  mounted() {
    this.startAutoPlay();
  },
});
