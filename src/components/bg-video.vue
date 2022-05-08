<template>
  <div class="container">
    <!-- <van-skeleton title :row="20" :loading="viedoLoadFinsh">    </van-skeleton> -->
    <full-page
      ref="fullpage"
      :options="options"
      id="fullpage"
      @click.native="interact"
    >
      <div class="section" id="sectionOne">
        <!-- 阻止事件冒泡 -->
        <div class="desc">
          <div class="desc-title">Vue.js</div>
          <div class="desc-content">
            一套用于构建用户界面的渐进式框架，与其它大型框架不同的是，Vue被设计为可以自底向上逐层应用。Vue的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。
          </div>
        </div>
        <div class="avatar" @click.stop="viewInfo">
          <el-avatar :size="70" :src="require('../assets/vue.png')"></el-avatar>
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
      <div class="section" id="sectionTwo">
        <div class="desc">
          <div class="desc-title">React</div>
          <div class="desc-content">
            无论你现在使用什么技术栈，在无需重写现有代码的前提下，通过引入 React
            来开发新功能。React 还可以使用 Node 进行服务器渲染，或使用 React
            Native 开发原生移动应用。
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
          <span class="logo-base">200</span>
        </div>
        <!-- <van-popup
          v-model="information"
          position="bottom"
          :style="{ height: '50%' }"
          >{{ content }}</van-popup
        > -->
      </div>
      <div class="section" id="sectionThree">
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
          <span class="logo-base">200</span>
        </div>
        <!-- <van-popup
          v-model="information"
          position="bottom"
          :style="{ height: '50%' }"
          >{{ content }}</van-popup
        > -->
      </div>
      <div class="section" id="sectionFour">
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
          <span class="logo-base">200</span>
        </div>
        <!-- <van-popup
          v-model="information"
          position="bottom"
          :style="{ height: '50%' }"
          >{{ content }}</van-popup
        > -->
      </div>
      <div class="section" id="sectionFive">
        <van-form @submit="onSubmit">
          <van-field
            v-model="form.name"
            name="用户名"
            label="用户名"
            placeholder="例如: 马超/妲己/后裔/镜"
            :rules="[{ validatorName, message: '不要超过10个字符哦~' }]"
          />
          <van-field
            v-model="form.email"
            name="用户名"
            label="用户名"
            placeholder="例如: xxx@email.com"
            :rules="[{ validatorEmail, message: '不要超过10个字符哦~' }]"
          />
          <van-field
            v-model="form.QQ"
            type="password"
            name="密码"
            label="密码"
            placeholder="例如: 7491481843"
            :rules="[{ validatorQQ, message: '不要超过10个字符哦~' }]"
          />
          <div style="margin: 16px">
            <van-button round block type="info" native-type="submit"
              >提交</van-button
            >
          </div>
        </van-form>
      </div>
    </full-page>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  name: "BackgroudVideo",
  data: function () {
    return {
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
      options: {},
      form: {
        name: "",
        email: "",
        QQ: "",
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
        "https://23126342.s21v.faiusr.com/58/ABUIABA6GAAggvTYkwYo2P6g3gM.mp4",
        "https://23126342.s21v.faiusr.com/58/ABUIABA6GAAggvTYkwYooMD47gY.mp4",
        "https://23126342.s21v.faiusr.com/58/ABUIABA6GAAggvTYkwYokq_Q2Ac.mp4",
      ],
    };
  },
  async mounted() {
    // 播放器初始化
    const Aliplayer = await this.getPlay();
    for (let i = 0; i < this.videoUrls.length; i++) {
      const playerIntance = new Aliplayer({
        id: this.fullPage[i],
        source: this.videoUrls[i], //播放地址，可以是第三方直播地址，或阿里云直播服务中的拉流地址。
        isLive: false, //是否为直播播放。
        rePlay: true, // 重复播放
        autoplay: true,
      });
      this.videoPlayers.push(playerIntance);
      this.viedoLoadFinsh = true;
    }
  },
  computed: {},
  methods: {
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
    onRefresh() {},
    validatorName(val) {
      console.log(val.length);
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
</style>