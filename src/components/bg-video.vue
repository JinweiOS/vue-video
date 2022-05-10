<template>
  <div
    class="container"
  >
    <!-- <van-skeleton title :row="20" :loading="viedoLoadFinsh">    </van-skeleton> -->
    <div v-show="isShow">
      <full-page
        ref="fullpage"
        :options="options"
        id="fullpage"
        @on-leave="fullPageChange"
      >
        <div class="section" id="sectionOne" @click="interact">
          <!-- 阻止事件冒泡 -->
          <div class="desc">
            <div class="desc-title">Vue.js</div>
            <div class="desc-content">
              一套用于构建用户界面的渐进式框架，与其它大型框架不同的是，Vue被设计为可以自底向上逐层应用。Vue的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。
            </div>
          </div>
          <div class="avatar" @click.stop="viewInfo">
            <el-avatar
              :size="70"
              :src="require('../assets/vue.png')"
            ></el-avatar>
            <span class="logo-base">Vue.js</span>
          </div>
          <div
            class="love-btn"
            :class="{ 'shake-hard': shakeHand }"
            @click.stop="loveIt"
          >
            <svg
              t="1651912015322"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3548"
              width="48"
              height="48"
            >
              <path
                d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                fill="#F489B5"
                p-id="3549"
              ></path>
              <path
                d="M544 341.76c-88.32-133.12-266.24-55.04-266.24 90.88 0 99.84 88.32 168.96 156.16 222.72 48.64 39.68 71.68 56.32 89.6 71.68 11.52 10.24 28.16 10.24 39.68 0 17.92-15.36 42.24-33.28 90.88-71.68 67.84-51.2 156.16-124.16 156.16-222.72 2.56-145.92-176.64-225.28-266.24-90.88z"
                fill="#FFFFFF"
                opacity=".5"
                p-id="3550"
              ></path>
              <path
                d="M454.4 398.08c-80.64-120.32-240.64-49.92-240.64 81.92 0 89.6 80.64 152.32 140.8 200.96 43.52 35.84 65.28 51.2 80.64 64 10.24 8.96 25.6 8.96 35.84 0 16.64-12.8 37.12-29.44 81.92-64 61.44-46.08 140.8-111.36 140.8-200.96 2.56-131.84-158.72-203.52-239.36-81.92z"
                fill="#FFFFFF"
                p-id="3551"
              ></path>
            </svg>
            <span class="logo-base">{{ loveCount }}</span>
          </div>
          <!-- <van-popup
          v-model="information"
          position="bottom"
          :style="{ height: '50%' }"
          >asdsafds<iframe src="https://www.baidu.com"></iframe
        ></van-popup> -->
        </div>
        <div class="section" id="sectionTwo" @click="interact">
          <div class="desc">
            <div class="desc-title">React</div>
            <div class="desc-content">
              无论你现在使用什么技术栈，在无需重写现有代码的前提下，通过引入
              React 来开发新功能。React 还可以使用 Node 进行服务器渲染，或使用
              React Native 开发原生移动应用。
            </div>
          </div>
          <div class="avatar" @click="viewInfo">
            <el-avatar
              :size="70"
              :src="require('../assets/react.png')"
            ></el-avatar>
            <span class="logo-base">React</span>
          </div>
          <div
            class="love-btn"
            :class="{ 'shake-hard': shakeHand }"
            @click.stop="loveIt"
          >
            <svg
              t="1651912015322"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3548"
              width="48"
              height="48"
            >
              <path
                d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                fill="#F489B5"
                p-id="3549"
              ></path>
              <path
                d="M544 341.76c-88.32-133.12-266.24-55.04-266.24 90.88 0 99.84 88.32 168.96 156.16 222.72 48.64 39.68 71.68 56.32 89.6 71.68 11.52 10.24 28.16 10.24 39.68 0 17.92-15.36 42.24-33.28 90.88-71.68 67.84-51.2 156.16-124.16 156.16-222.72 2.56-145.92-176.64-225.28-266.24-90.88z"
                fill="#FFFFFF"
                opacity=".5"
                p-id="3550"
              ></path>
              <path
                d="M454.4 398.08c-80.64-120.32-240.64-49.92-240.64 81.92 0 89.6 80.64 152.32 140.8 200.96 43.52 35.84 65.28 51.2 80.64 64 10.24 8.96 25.6 8.96 35.84 0 16.64-12.8 37.12-29.44 81.92-64 61.44-46.08 140.8-111.36 140.8-200.96 2.56-131.84-158.72-203.52-239.36-81.92z"
                fill="#FFFFFF"
                p-id="3551"
              ></path>
            </svg>
            <span class="logo-base">{{ loveCount }}</span>
          </div>
          <!-- <van-popup
          v-model="information"
          position="bottom"
          :style="{ height: '50%' }"
          >{{ content }}</van-popup
        > -->
        </div>
        <div class="section" id="sectionThree" @click="interact">
          <div class="section" id="sectionTwo">
            <div class="desc">
              <div class="desc-title">Rescript</div>
              <div class="desc-content">
                ReScript is a robustly typed language that compiles to efficient
                and human-readable JavaScript. It comes with a lightning fast
                compiler toolchain that scales to any codebase size.
              </div>
            </div>
          </div>
          <div class="avatar" @click="viewInfo">
            <el-avatar
              :size="70"
              :src="require('../assets/rescript.png')"
            ></el-avatar>
            <span class="logo-base">Rescript</span>
          </div>
          <div
            class="love-btn"
            :class="{ 'shake-hard': shakeHand }"
            @click.stop="loveIt"
          >
            <svg
              t="1651912015322"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3548"
              width="48"
              height="48"
            >
              <path
                d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                fill="#F489B5"
                p-id="3549"
              ></path>
              <path
                d="M544 341.76c-88.32-133.12-266.24-55.04-266.24 90.88 0 99.84 88.32 168.96 156.16 222.72 48.64 39.68 71.68 56.32 89.6 71.68 11.52 10.24 28.16 10.24 39.68 0 17.92-15.36 42.24-33.28 90.88-71.68 67.84-51.2 156.16-124.16 156.16-222.72 2.56-145.92-176.64-225.28-266.24-90.88z"
                fill="#FFFFFF"
                opacity=".5"
                p-id="3550"
              ></path>
              <path
                d="M454.4 398.08c-80.64-120.32-240.64-49.92-240.64 81.92 0 89.6 80.64 152.32 140.8 200.96 43.52 35.84 65.28 51.2 80.64 64 10.24 8.96 25.6 8.96 35.84 0 16.64-12.8 37.12-29.44 81.92-64 61.44-46.08 140.8-111.36 140.8-200.96 2.56-131.84-158.72-203.52-239.36-81.92z"
                fill="#FFFFFF"
                p-id="3551"
              ></path>
            </svg>
            <span class="logo-base">{{ loveCount }}</span>
          </div>
          <!-- <van-popup
          v-model="information"
          position="bottom"
          :style="{ height: '50%' }"
          >{{ content }}</van-popup
        > -->
        </div>
        <div class="section" id="sectionFour" @click="interact">
          <div class="avatar" @click="viewInfo">
            <el-avatar
              :size="70"
              :src="require('../assets/myinfo.jpg')"
            ></el-avatar>
            <span class="logo-base">Vue.js</span>
          </div>
          <div
            class="love-btn"
            :class="{ 'shake-hard': shakeHand }"
            @click.stop="loveIt"
          >
            <svg
              t="1651912015322"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3548"
              width="48"
              height="48"
            >
              <path
                d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                fill="#F489B5"
                p-id="3549"
              ></path>
              <path
                d="M544 341.76c-88.32-133.12-266.24-55.04-266.24 90.88 0 99.84 88.32 168.96 156.16 222.72 48.64 39.68 71.68 56.32 89.6 71.68 11.52 10.24 28.16 10.24 39.68 0 17.92-15.36 42.24-33.28 90.88-71.68 67.84-51.2 156.16-124.16 156.16-222.72 2.56-145.92-176.64-225.28-266.24-90.88z"
                fill="#FFFFFF"
                opacity=".5"
                p-id="3550"
              ></path>
              <path
                d="M454.4 398.08c-80.64-120.32-240.64-49.92-240.64 81.92 0 89.6 80.64 152.32 140.8 200.96 43.52 35.84 65.28 51.2 80.64 64 10.24 8.96 25.6 8.96 35.84 0 16.64-12.8 37.12-29.44 81.92-64 61.44-46.08 140.8-111.36 140.8-200.96 2.56-131.84-158.72-203.52-239.36-81.92z"
                fill="#FFFFFF"
                p-id="3551"
              ></path>
            </svg>
            <span class="logo-base">{{ loveCount }}</span>
          </div>
          <!-- <van-popup
          v-model="information"
          position="bottom"
          :style="{ height: '50%' }"
          >{{ content }}</van-popup
        > -->
        </div>
        <div class="section" id="sectionFive">
          <div class="ques-title">报名表</div>
          <div class="qeus-mini-title">Registration Form</div>
          <el-divider content-position="right"
            ><svg
              t="1651989880693"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1134"
              width="32"
              height="32"
            >
              <path
                d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                fill="#69C2F9"
                p-id="1135"
              ></path>
              <path
                d="M528.64 505.6h229.12c33.28 0 61.44 25.6 61.44 57.6v112.64c0 32-26.88 57.6-61.44 57.6h-192c-2.56 0-5.12 1.28-7.68 2.56l-32 24.32c-6.4 5.12-14.08 7.68-23.04 7.68-5.12 0-10.24-1.28-15.36-2.56-14.08-5.12-21.76-17.92-21.76-30.72V564.48c1.28-32 28.16-58.88 62.72-58.88z"
                fill="#FFFFFF"
                opacity=".5"
                p-id="1136"
              ></path>
              <path
                d="M300.8 256h358.4c52.48 0 96 46.08 96 102.4v199.68c0 56.32-43.52 102.4-96 102.4H359.68c-3.84 0-8.96 1.28-11.52 3.84l-49.92 42.24c-10.24 8.96-23.04 12.8-35.84 12.8-7.68 0-15.36-1.28-23.04-5.12C217.6 704 204.8 683.52 204.8 659.2V358.4c0-56.32 43.52-102.4 96-102.4z m290.56 235.52c20.48 0 35.84-16.64 35.84-35.84s-16.64-35.84-35.84-35.84c-20.48 0-35.84 16.64-35.84 35.84-1.28 19.2 15.36 35.84 35.84 35.84z m-106.24 0c20.48 0 35.84-16.64 35.84-35.84s-16.64-35.84-35.84-35.84c-20.48 0-35.84 16.64-35.84 35.84-1.28 19.2 15.36 35.84 35.84 35.84z m-110.08 0c20.48 0 35.84-16.64 35.84-35.84 0-20.48-16.64-35.84-35.84-35.84-20.48 0-35.84 16.64-35.84 35.84 0 19.2 16.64 35.84 35.84 35.84z"
                fill="#FFFFFF"
                p-id="1137"
              ></path></svg
          ></el-divider>
          <div class="ctc">🙊想了解更多吗？留下你的信息📘吧~</div>
          <van-form class="form-setting" @submit="onSubmit">
            <van-field
              v-model="form.name"
              label="姓名"
              placeholder="例如: 马超/妲己/后裔/镜"
              :rules="[{ validatorName, message: '不要超过10个字符哦~' }]"
            />
            <van-field
              v-model="form.qq"
              label="QQ"
              placeholder="...不用例如了"
              :rules="[{ validatorEmail, message: '不要超过10个字符哦~' }]"
            />
            <van-field
              v-model="form.school"
              label="学校"
              placeholder="例如: 江苏大学/江苏科技大学/其他..."
              :rules="[{ validatorQQ, message: '不要超过10个字符哦~' }]"
            />
            <van-field
              v-model="form.tech"
              label="专业"
              placeholder="例如: 计算机科学与技术/其他..."
              :rules="[{ validatorQQ, message: '不要超过10个字符哦~' }]"
            />
            <div class="teacher">
              <div class="teacher-col">
                <img
                  width="130px"
                  height="180px"
                  :src="require('../assets/egalejiajia-removebg.png')"
                />
              </div>
            </div>
            <div class="tips">
              🥇添加老师好友，回复<span class="important-msg">已提交</span
              >领取学习礼包~
            </div>
            <div style="margin: 5px 16px">
              <van-button
                plain
                block
                type="info"
                native-type="submit"
                size="small"
                >提交</van-button
              >
            </div>
          </van-form>
          <div class="ctc ques-copyright">@Copyright © 2022 YingGe Tech.</div>
          <div class="ctc ques-editor">Created By Jinwei Peng.</div>
        </div>
      </full-page>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  name: "BackgroudVideo",
  data() {
    return {
      isShow: false,
      isAutoPlay: false,
      pageIndex: 0,
      shakeHand: false,
      loveCount: 0,
      msgs: [
        "😀很高兴认识你呢~我叫秋颜🍂",
        "有你🥰在，满天都是星星&#10024;&#10024;",
        "天这么热！要不你来点西瓜🍉🍉",
      ],
      content: "",
      contentSource: [""],
      localIconPath: ["../assets/qrcode.png"],
      viedoLoadFinsh: false,
      information: false,
      options: {
        onLeave: this.fullPageChange,
      },
      form: {
        name: "",
        school: "",
        qq: "",
        tech: "",
      },
      isLoading: false,
      fullPage: [
        "sectionOne",
        "sectionTwo",
        "sectionThree",
        "sectionFour",
        "sectionFive",
      ],
      videoPlayers: [],
      videoUrls: [
        "https://23126342.s21v.faiusr.com/58/ABUIABA6GAAgyNbhkwYo0J_5owc.mp4",
        "https://23126342.s21v.faiusr.com/58/ABUIABA6GAAgzNbhkwYopfeigQI.mp4",
        "https://23126342.s21v.faiusr.com/58/ABUIABA6GAAg9ePikwYo94DjqgM.mp4",
        "https://23126342.s21v.faiusr.com/58/ABUIABA6GAAg9_PikwYoto3f3AQ.mp4",
      ],
    };
  },
  async mounted() {
    // 播放器初始化
    const loading = this.$loading({
      lock: true,
      text: "⏳视频正在拼命加载中...",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.9)",
      customClass: 'loading-cus'
    });

    const Aliplayer = await this.getPlay();
    for (let i = 0; i < this.videoUrls.length; i++) {
      if (i === 0) {
        this.isAutoPlay = true;
      } else {
        this.isAutoPlay = false;
      }
      const playerIntance = new Aliplayer({
        id: this.fullPage[i],
        source: this.videoUrls[i], //播放地址，可以是第三方直播地址，或阿里云直播服务中的拉流地址。
        isLive: false, //是否为直播播放。
        rePlay: true, // 重复播放
        autoplay: false,
        skinLayout: [
          {
            name: "H5Loading",
            align: "cc",
          },
        ],
      });
      // playerIntance.on("play", (eee) => console.log(eee, "播放了"));
      // playerIntance.on("error", (eee) => console.log(eee, "错误了"));

      this.videoPlayers.push(playerIntance);
    }
    // setInterval(() => {
    //   const status = this.videoPlayers[0].getStatus();
    //   if (status === "ready") {
    //     this.videoPlayers[this.pageIndex].play();
    //     document.getElementsByClassName('prism-big-play-btn')[0].click();
    //     this.isShow = true;
    //   }
    //   console.log(status);
    // }, 1000);
    this.videoPlayers[0].on("ready", () => {
      // this.videoPlayers[this.pageIndex].play();
      this.isShow = true;
    });
    this.videoPlayers[0]?.play();
    let timeAll = 0;
    const videoInitTimer = setInterval(() => {
      timeAll++;
      if (this.videoPlayers[3].getStatus() === "ready") {
        this.isShow = true;
        loading.close();
        clearInterval(videoInitTimer);
        return;
      }
      if (timeAll > 5) {
        this.isShow = true;
        loading.close();
        clearInterval(videoInitTimer);
      }
    }, 500);
    this.isShow = true;
  },
  computed: {},
  methods: {
    startView() {
      this.videoPlayers[0].play();
    },
    async fullPageChange(origin, destination) {
      // bug
      this.pageIndex = destination.index;
      this.videoPlayers[this.pageIndex]?.pause();
      if (destination.index >= 4) {
        this.pageIndex = destination.index - 1;
      }
      if (this.pageIndex > this.videoUrls.length) {
        this.videoPlayers[origin.index]?.pause();
        return;
      }
      this.videoPlayers[this.pageIndex] &&
        this.videoPlayers[this.pageIndex].play();
    },
    getloveMsg() {
      if (this.msgs.length === 0) {
        return "我有点困了&#128564，你也要早睡哦，晚安🎈";
      }
      return this.msgs.shift();
    },
    loveIt() {
      this.loveCount++;
      this.shakeHand = true;
      setTimeout(() => {
        this.shakeHand = false;
      }, 1000);
    },
    interact() {
      this.$notify({
        message: this.getloveMsg(),
        dangerouslyUseHTMLString: true,
        duration: "750",
      });
    },
    viewInfo() {
      // $event.preventDefault()
      this.information = true;
    },
    validatorName(val) {
      return val.length < 10;
    },
    validatorEmail() {
      return this.form.email.length < 10;
    },
    validatorQQ() {
      return this.form.QQ.length < 10;
    },
    async onSubmit() {
      await axios.post(
        "http://web.iproute.cn/postapi.php",
        qs.stringify(this.form),
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      );
      this.$notify({
        message: "你已成功提交报名信息！",
        dangerouslyUseHTMLString: true,
        duration: "750",
      });
      setTimeout(() => {
        const link = document.createElement("a");
        link.style.display = "none";
        link.href =
          "tencent://message/?uin=1341384793&Site=http://iproute.cn&Menu=yes";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 4000);
      this.form.name = "";
      this.form.school = "";
      this.form.qq = "";
      this.form.tech = "";
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
  destroyed() {},
};
</script>

<style scoped>
.container {
  height: 100%;
}

.section {
  position: relative;
  z-index: 1;
}

.avatar {
  position: absolute;
  right: 20px;
  bottom: 210px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.tips {
  padding-left: 16px;
}

.van-button--plain {
  font-size: 16px;
}

.avatar:hover {
  cursor: pointer;
}

.love-btn {
  position: absolute;
  right: 30px;
  bottom: 116px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  /* background: -webkit-linear-gradient(-70deg, #a2facf 0%, #64acff 100%); */
}

.desc {
  position: absolute;
  left: 10px;
  bottom: 160px;
  width: 70%;
}

.love-btn:hover {
  cursor: pointer;
}

.logo-base {
  margin-top: 8px;
  color: #fff;
}
.desc-title {
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1px;
  font-family: PingFang SC, DFPKingGothicGB-Medium, sans-serif;
}

.desc-title::before {
  content: "@";
}
.desc-title::after {
  content: "🍂";
}

.desc-content {
  margin-top: 5px;
  color: #fff;
  font-size: 14px;
  line-height: 22px;
  white-space: pre-wrap;
}

.ques-title {
  padding-top: 20px;
  font-size: 24px;
  color: #3aa8ed;
  display: flex;
  justify-content: center;
}
.qeus-mini-title {
  color: #3aa8ed;
  display: flex;
  justify-content: center;
}
.ques-img {
  display: flex;
  flex-grow: 1;
  /* position: absolute; */
  /* bottom: 0px;
  right: 0px; */
  position: absolute;
  z-index: 999;
  width: 200px;
  height: 200px;
  bottom: 0px;
  left: 0px;
  /* z-index: 3; */
}
.ctc {
  color: #646566;
  padding: 16px;
  font-size: 16px;
  letter-spacing: 1px;
}
.ques-copyright {
  position: absolute;
  left: 0px;
  bottom: 0px;
}
.ques-editor {
  position: absolute;
  left: 0px;
  bottom: 26px;
}
.ques-qrcode {
  position: absolute;
  right: 0px;
  bottom: 45px;
}

.form-setting /deep/ .van-cell {
  font-size: 16px;
}

.teacher {
  display: flex;
}

.teacher-col {
  width: 100%;
  text-align: center;
}

.start {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 999;
}

.start:hover {
  cursor: pointer;
}

.important-msg {
  color: #fb5c56;
}

.loading-cus /deep/ .el-loading-spinner .el-loading-text {
  color: #fff !important;
}
</style>