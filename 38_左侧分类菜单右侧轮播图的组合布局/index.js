new Vue({
  el: "#app",
  data: {
    timer: null, //定时器，用于banner轮播
    banner_index: 1, //当前banner下标
    banner_size: 3, //banner数量
    menu_item_index: 0, //当前鼠标移入的分类菜单下标
    // 分类菜单数据（json格式，我提前整理好的）
    menu_list: [
      {
        title: "手机、配件",
        list: [
          {
            menu_title: "手机通讯",
            menus: ["手机", "手机维修", "以旧换新"],
          },
          {
            menu_title: "手机配件",
            menus: ["手机壳", "手机存储卡", "数据线", "充电器", "电池"],
          },
          {
            menu_title: "运营商",
            menus: ["中国联通", "中国移动", "中国电信"],
          },
          {
            menu_title: "智能设备",
            menus: ["智能手环", "智能家居", "智能手表", "其他配件"],
          },
          {
            menu_title: "娱乐",
            menus: ["耳机", "音响", "收音机", "麦克风"],
          },
        ],
      },
      {
        title: "电脑",
        list: [
          {
            menu_title: "电脑",
            menus: ["笔记本", "平板", "一体机"],
          },
          {
            menu_title: "电脑配件",
            menus: [
              "显示器",
              "CPU",
              "主板",
              "硬盘",
              "电源",
              "显卡",
              "其他配件",
            ],
          },
          {
            menu_title: "游戏设备",
            menus: ["游戏机", "耳机", "游戏软件"],
          },
          {
            menu_title: "网络产品",
            menus: ["路由器", "网络机顶盒", "交换机", "存储卡", "网卡"],
          },
          {
            menu_title: "外部产品",
            menus: ["鼠标", "键盘", "U盘", "移动硬盘", "鼠标垫", "电脑清洁"],
          },
        ],
      },
      {
        title: "家用电器",
        list: [
          {
            menu_title: "电视",
            menus: ["国产品牌", "日韩品牌", "欧美品牌"],
          },
          {
            menu_title: "空调",
            menus: ["显示器", "柜式", "中央", "壁挂式"],
          },
          {
            menu_title: "冰箱",
            menus: ["多门", "对开门", "三门", "双门"],
          },
          {
            menu_title: "洗衣机",
            menus: ["滚筒式洗衣机", "迷你洗衣机", "洗烘一体机"],
          },
          {
            menu_title: "厨房电器",
            menus: ["油烟机", "洗碗机", "燃气灶"],
          },
        ],
      },
      {
        title: "家具",
        list: [
          {
            menu_title: "家纺",
            menus: ["被子", "枕头", "四件套", "床垫"],
          },
          {
            menu_title: "灯具",
            menus: ["台灯", "顶灯", "节能灯", "应急灯"],
          },
          {
            menu_title: "厨具",
            menus: ["烹饪锅具", "餐具", "菜板刀具"],
          },
          {
            menu_title: "家装",
            menus: ["地毯", "沙发垫套", "装饰字画", "照片墙", "窗帘"],
          },
          {
            menu_title: "生活日用",
            menus: ["收纳用品", "浴室用品", "雨伞雨衣"],
          },
        ],
      },
    ],
  },
  methods: {
    // banner播放停止
    stopAutoPlay() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
    // banner播放开始
    startAutoPlay() {
      let _t = this;
      // 3秒切换
      _t.timer = setInterval(function () {
        _t.banner_index++;
        if (_t.banner_index > _t.banner_size) {
          _t.banner_index = 1;
        }
      }, 3000);
    },
    // 上一张
    prevBanner() {
      this.stopAutoPlay();
      this.banner_index--;
      if (this.banner_index <= 0) {
        this.banner_index = this.banner_size;
      }
      this.startAutoPlay();
    },
    // 下一张
    nextBanner() {
      this.stopAutoPlay();
      this.banner_index++;
      if (this.banner_index > this.banner_size) {
        this.banner_index = 1;
      }
      this.startAutoPlay();
    },
    // 切换banner显示（点击指示器）
    changeBanner(index) {
      this.stopAutoPlay();
      this.banner_index = index;
      this.startAutoPlay();
    },
    // 显示对应的二级分类菜单
    showSubMenu(index) {
      if (index != -1) {
        this.menu_item_index = index;
      }
      document.querySelector(".sub-menu").classList.remove("hide");
    },
    // 隐藏二级分类菜单
    hideSubMenu() {
      document.querySelector(".sub-menu").classList.add("hide");
    },
  },
  mounted() {
    this.startAutoPlay();
  },
});
