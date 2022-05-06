<template>
  <div class="video-container">
    <el-drawer title="我是标题" :visible.sync="drawer" direction="btt">
      <span>我来啦!</span>
    </el-drawer>
    <!-- <el-carousel
      :interval="5000"
      arrow="always"
      direction="vertical"
      :autoplay="false"
    >
      <el-carousel-item v-for="item in items" :key="item">
      </el-carousel-item>
    </el-carousel> -->
    <div class="player-wrapper">
      <div
        class="backgroud"
        :id="`J_prismPlayer${domId}`"
        v-for="domId in domIds"
        :key="domId"
      ></div>
      <!-- <div class="backgroud" ref="ttt" id="J_prismPlayer"></div>
      <div class="backgroud" id="J_prismPlayer"></div> -->
    </div>
    <div class="title-layout">
      <span class="big-title"> Ready? Just Do It! </span>
    </div>
    <div class="cover-page">
      <div
        class="nextVideo-btn"
        id="next-action"
        :class="{ 'shake-vertical': nextShaking }"
        @click="nextVideo"
      >
        <svg
          t="1651825134963"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3825"
          width="64"
          height="64"
        >
          <path
            d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667z m0 810.666666c-204.8 0-373.333333-168.533333-373.333333-373.333333S307.2 138.666667 512 138.666667 885.333333 307.2 885.333333 512 716.8 885.333333 512 885.333333z"
            p-id="3826"
            fill="#ffffff"
          ></path>
          <path
            d="M672 499.2l-128 119.466667V341.333333c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v277.333334l-128-119.466667c-12.8-12.8-34.133333-10.666667-44.8 2.133333-12.8 12.8-10.666667 34.133333 2.133333 44.8l181.333334 170.666667c6.4 6.4 14.933333 8.533333 21.333333 8.533333s14.933333-2.133333 21.333333-8.533333l181.333334-170.666667c12.8-12.8 12.8-32 2.133333-44.8-12.8-12.8-32-14.933333-44.8-2.133333z"
            p-id="3827"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
      <el-button @click="viewInfo">aaaa</el-button>
      <div class="love-btn" @click="love" :class="{ 'shake-hard': shaking }">
        <svg
          t="1651825329056"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4100"
          width="64"
          height="64"
        >
          <path
            d="M859.733333 253.866667c-44.8-44.8-102.4-70.4-166.4-70.4-61.866667 0-121.6 25.6-166.4 70.4l-14.933333 17.066666-17.066667-17.066666c-44.8-44.8-102.4-70.4-166.4-70.4-61.866667 0-121.6 25.6-166.4 70.4-91.733333 91.733333-91.733333 243.2 0 337.066666l324.266667 330.666667c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-4.266667 23.466666-8.533333l324.266667-330.666667c44.8-44.8 68.266667-104.533333 68.266667-168.533333s-21.333333-123.733333-66.133334-168.533333z m-44.8 290.133333L512 853.333333 209.066667 544c-66.133333-68.266667-66.133333-179.2 0-247.466667 32-32 74.666667-51.2 119.466666-51.2 44.8 0 87.466667 17.066667 119.466667 51.2l38.4 40.533334c12.8 12.8 34.133333 12.8 44.8 0l38.4-40.533334c32-32 74.666667-51.2 119.466667-51.2 44.8 0 87.466667 17.066667 119.466666 51.2 32 32 49.066667 76.8 49.066667 123.733334s-12.8 91.733333-42.666667 123.733333z"
            p-id="4101"
            fill="#e6408e"
          ></path>
        </svg>
        <span class="love-count">200</span>
      </div>
      <div class="avatar" @click="viewInfo">
        <el-avatar :size="70" src="data:image/jpeg;base64,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"></el-avatar>
        <span class="love-count">Blink</span>
      </div>
    </div>
  </div>
</template>

<script>
import normalizeWheel from "normalize-wheel";
import Vue from "vue";
const EventBus = new Vue();
export default {
  name: "BackgroudVideo",
  data: function () {
    return {
      drawer: false,
      direction: "",
      nextShaking: false,
      canNext: false,
      shaking: false,
      // domId绑定视频map, key: domid, value: {vUrl}
      domVideoMap: new Map(),
      touchMove: false,
      // h5 滑动
      touchStartY: "",
      touchEndY: "",
      playTimer: null,
      items: ["1", "2"],
      currentDomId: 1,
      domIds: [0, 1, 2],
      bgs: {
        kuaiVideo: "//static.yximgs.com/udata/pkg/fe/kwai_video.a7616d99.mp4",
        littleBookVideo:
          "https://dc.xhscdn.com/9379abe0-7ad8-11e9-8794-9320f6c9d557/%E8%83%8C%E6%99%AF%E8%A7%86%E9%A2%91.mp4",
        miuiVideo: "../assets/miui.mp4",
      },
    };
  },
  async mounted() {
    EventBus.$on("slide", () => {
      console.log("pjw");
      document.getElementById("next-action").click();
    });
    // this.$refs.videoBlock[1].scrollIntoView({ behavior: "smooth" });
    document.getElementById("J_prismPlayer1").scrollIntoView();
    this.bindVideoToDom("J_prismPlayer1");
    // 播放器初始化
    await this.bindPlayer("J_prismPlayer1");
    this.domVideoMap.get("J_prismPlayer1").player.play();
    // 鼠标滚动事件
    window.addEventListener("wheel", this.handleWheel);
    window.addEventListener("touchstart", this.h5handleWheelTouchStart);
    window.addEventListener("touchend", this.h5handleWheelTouchEnd);
    window.addEventListener("touchmove", () => {
      this.touchMove = true;
    });
  },
  computed: {
    h5Move: function () {
      return this.touchStartY - this.touchEndY;
    },
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    viewInfo() {
      this.drawer = true;
    },
    love() {
      this.shaking = true;
      setTimeout(() => {
        this.shaking = false;
      }, 2000);
    },
    bindVideoToDom(domId) {
      this.domVideoMap.set(domId, {
        vUrl: "http://mc.iproute.cn:31010/temp/%E5%AE%A3%E4%BC%A0%E7%89%87v2.mp4",
      });
    },
    async nextVideoH5() {
      // 是否可以加载下一个标志位
      this.canNext = false;
      // 关闭当前播放器
      this.domVideoMap
        .get(`J_prismPlayer${this.currentDomId}`)
        .player.dispose();
      // 初始化dom，启动下一个播放器
      this.currentDomId++;
      if (this.domIds.includes(this.currentDomId)) {
        document.getElementById(`J_prismPlayer${this.currentDomId}`).scrollTo({
          top: 0,
          behavior: "smooth",
        });
        await this.bindPlayer(`J_prismPlayer${this.currentDomId}`);
      } else {
        this.domIds.splice(this.domIds.length, 0, this.currentDomId);
        this.$nextTick(() => {
          document
            .getElementById(`J_prismPlayer${this.currentDomId}`)
            .scrollTo({
              top: 0,
              behavior: "smooth",
            });
        });
        await this.bindPlayer(`J_prismPlayer${this.currentDomId}`);
      }
    },
    async last() {
      this.canNext = false;
      // 关闭当前播放器
      this.domVideoMap
        .get(`J_prismPlayer${this.currentDomId}`)
        .player.dispose();
      this.currentDomId--;
      // 为了前面预留一个
      if (this.domIds.includes(this.currentDomId - 1)) {
        document
          .getElementById(`J_prismPlayer${this.currentDomId}`)
          .scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        await this.bindPlayer(`J_prismPlayer${this.currentDomId}`);
      } else {
        this.domIds.splice(0, 0, this.currentDomId - 1);
        this.$nextTick(() => {
          document
            .getElementById(`J_prismPlayer${this.currentDomId}`)
            .scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
        });
        await this.bindPlayer(`J_prismPlayer${this.currentDomId}`);
      }
    },
    h5handleWheelTouchStart(event) {
      const touch = event.touches[0];
      this.touchStartY = touch.pageY;
    },
    async h5handleWheelTouchEnd(event) {
      // event.preventDefault();
      if (!this.touchMove) {
        return;
      }
      const touch = event.changedTouches[0];
      this.touchEndY = touch.pageY;

      // 驱动页面滚动
      EventBus.$emit("slide");
      this.touchMove = false;
    },

    async driverH5Swiper() {
      if (this.canNext) {
        if (this.canNext) {
          this.canNext = false;
        }
        if (Math.floor(this.h5Move) > 20) {
          await this.nextVideo();
        }
        if (Math.floor(this.h5Move) < -20) {
          await this.last();
        }
      }
    },

    async nextVideo() {
      this.nextShaking = true;
      setTimeout(() => (this.nextShaking = false), 2000);
      // 是否可以加载下一个标志位
      this.canNext = false;
      // 关闭当前播放器
      this.domVideoMap
        .get(`J_prismPlayer${this.currentDomId}`)
        .player.dispose();
      // 初始化dom，启动下一个播放器
      this.currentDomId++;
      if (this.domIds.includes(this.currentDomId)) {
        document
          .getElementById(`J_prismPlayer${this.currentDomId}`)
          .scrollIntoView({
            behavior: "smooth",
            block: "center",
          });

        await this.bindPlayer(`J_prismPlayer${this.currentDomId}`);
      } else {
        this.domIds.splice(this.domIds.length, 0, this.currentDomId);
        this.$nextTick(() => {
          document
            .getElementById(`J_prismPlayer${this.currentDomId}`)
            .scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
        });
        await this.bindPlayer(`J_prismPlayer${this.currentDomId}`);
      }
    },
    async handleWheel(event) {
      const normalized = normalizeWheel(event);
      if (this.canNext) {
        if (this.canNext) {
          this.canNext = false;
        }
        if (normalized.pixelY > 120) {
          await this.nextVideo();
        }
        if (normalized.pixelY < -120) {
          await this.last();
        }
      }
    },
    async bindPlayer(domId) {
      const Aliplayer = await this.getPlay();
      // 绑定 video url
      if (!this.domVideoMap.has(domId)) {
        // TODO: 绑定函数中需要实现url挑选
        this.bindVideoToDom(domId);
      }
      const domConfig = this.domVideoMap.get(domId);
      const playerIntance = new Aliplayer(
        {
          id: domId,
          source: domConfig.vUrl, //播放地址，可以是第三方直播地址，或阿里云直播服务中的拉流地址。
          isLive: false, //是否为直播播放。
          rePlay: true, // 重复播放
        },
        this.setCanNextFlag
      );
      // 绑定播放器实例
      domConfig.player = playerIntance;
    },
    setCanNextFlag() {
      setTimeout(() => (this.canNext = true), 1000);
    },
    async getPlay() {
      return new Promise((resolve) => {
        if (window.Aliplayer) {
          resolve(window.Aliplayer);
        } else {
          this.playTimer = setInterval(() => {
            if (window.Aliplayer) {
              resolve(window.Aliplayer);
            }
          }, 1000);
        }
      });
    },
  },
  destroyed() {
    this.playTimer && clearTimeout(this.playTimer);
  },
};
</script>

<style scoped>
.video-container {
  height: 100%;
  overflow: hidden;
}
.video-my {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  left: 0;
  top: 0;
}
.backgroud {
  background: #060716;
  height: 100% !important;
  overflow: hidden;
}
.player-wrapper {
  position: relative;
  height: 100%;
  overflow: hidden;
}
.cover-page {
  background-color: #fff transparent;
  position: absolute;
  height: 100%;
  width: 60px;
  right: 40px;
  bottom: 0;
  z-index: 1;
}
.icon {
  height: 64px;
  width: 64px;
  color: #fff;
}

.icon:hover {
  cursor: pointer;
}

.outter {
  border: 7px solid rgba(255, 255, 255, 0.51);
  width: 64px;
  height: 64px;
  border-radius: 100%;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
}
.hover-animation {
  animation: warn 1s ease-out;
}

.nextVideo-btn {
  position: absolute;
  bottom: 80px;
  /* background: -webkit-linear-gradient(-70deg, #a2facf 0%, #64acff 100%); */
}
.love-btn {
  position: absolute;
  bottom: 164px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: -webkit-linear-gradient(-70deg, #a2facf 0%, #64acff 100%); */
}
.big-title {
  background: -webkit-linear-gradient(-70deg, #db469f 0%, #2188ff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  font-family: "Poppins", sans-serif;
  font-weight: bolder;
}

.title-layout {
  position: absolute;
  z-index: 1;
  left: 10px;
  bottom: 210px;
  height: 40px;
  font-size: 30px;
}
.love-count {
  color: #fff;
  font-size: 18px;
}
.avatar {
  position: absolute;
  bottom: 270px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
