<template>
<div>
  <div v-waterMarker="{text:'xn213版权所有',textColor:'rgba(180, 180, 180, 0.4)'}">

    <div class="waves-box">
      <h1 v-color
          class="waves-inner">
        (͡·̮̃·̃) 撸码的乐趣 💯 ，“人没了，™代码还在”
      </h1>

      <!-- svg 水波 -->
      <div>
        <svg class="waves"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             viewBox="0 24 150 28"
             preserveAspectRatio="none"
             shape-rendering="auto">
          <defs>
            <path id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
            </path>
          </defs>
          <g class="parallax">
            <use xlink:href="#gentle-wave"
                 x="48"
                 y="0"
                 fill="rgba(255,255,255,0.7"></use>
            <use xlink:href="#gentle-wave"
                 x="48"
                 y="3"
                 fill="rgba(255,255,255,0.5)"></use>
            <use xlink:href="#gentle-wave"
                 x="48"
                 y="5"
                 fill="rgba(255,255,255,0.3)"></use>
            <use xlink:href="#gentle-wave"
                 x="48"
                 y="7"
                 fill="#fff"></use>
          </g>
        </svg>
      </div>
    </div>

    <hr><hr>
    <br>

    <div v-waterMarker="{text:'这里是水印',textColor:'rgba(180,180,180,.3)'}">
      <div v-waves style="line-height: 100px;text-align: center;border: 1px solid #ccc;margin: 50px;width: 213px;height: 100px">test v-waves</div>
    </div>
    <div style="height: 200px" v-waterMarker="{text:'这里是水印',textColor:'red'}">
      <h1>1. test v-watermarker</h1>
    </div>

    <div style="height: 200px;border-top: 2px solid #0bf;margin-top: 21px;" v-waterMarker="{text:'版权所有 ©xn213',textColor:'blue'}">
      <h1>2. test v-watermarker</h1>
    </div>

    <hr><hr>
    <br>

    <!-- 日历组件 date-picker -->
    <div class="date-wrapper">
      <!--  :value="date" @input="val => value = val" -->
      <x-date v-model="date"></x-date>
    </div>

    <div class="el-dialog" v-draggable></div>

    <!-- 抽屉 -->
    <button @click="showDrawer">显示抽屉</button>
    <Drawer v-model="isShow"
            placement="left"
            :closable="true"
            width="512"
            title="first-level-drawer">
      <p>first drawer > Some contents...</p>
      <button @click="showInnerDrawer">显示二层抽屉</button>
      <template v-slot:trigger>
        <xn-button icon='edit'>{{ taobao }}</xn-button>
      </template>
    </Drawer>
    <Drawer v-model="innerShow"
            placement="left"
            :closable="true"
            title="second-level drawer">
      This is second-level-drawer.
    </Drawer>

    <div class="btns">
      <!-- 1 2 3 4 demo 显示 -->
      <button v-permission="'1'">权限按钮1</button>
      <button v-waves v-permission="'2'">权限按钮2</button>
      <button v-permission="'demo'">权限按钮demo</button>
      <!-- 5 不显示 -->
      <button v-permission="'5'">权限按钮5</button>
    </div>

    <!-- icon -->
    <div class="icon-wrapper">
      <div class="nav">
        <Icon custom="iconfont icon-crmdaohangicon-1" />
        <Icon custom="iconfont icon-crmdaohangicon-2" />
        <Icon custom="iconfont icon-crmdaohangicon-3" />
        <Icon custom="iconfont icon-crmdaohangicon-4" />
        <Icon custom="iconfont icon-crmdaohangicon-5" />
        <Icon custom="iconfont icon-crmdaohangicon-6" />
        <Icon custom="iconfont icon-crmdaohangicon-7" />
        <Icon custom="iconfont icon-crmdaohangicon-8" />
        <Icon custom="iconfont icon-crmdaohangicon-9" />
        <Icon custom="iconfont icon-crmdaohangicon-10" />
        <Icon custom="iconfont icon-crmdaohangicon-12" />
        <Icon custom="iconfont icon-crmdaohangicon-13" />
        <Icon custom="iconfont icon-crmdaohangicon-14" />
        <Icon custom="iconfont icon-crmdaohangicon-15" />
      </div>
      <div class="nav nav-right">
        <Icon custom="iconfont icon-crmdaohangicon-16"
              @click="changeIcon" />
        <Icon custom="iconfont icon-crmdaohangicon-17" />
      </div>
      <div class="nav nav-left">
        <Icon custom="iconfont icon-crmdaohangicon-18" />
        <Icon custom="iconfont icon-crmdaohangicon-19" />
      </div>
      <div class="nav">
        <Icon custom="iconfont icon-crmdaohangicon-20" />
      </div>
    </div>

    <xn-button>{{ taobao }}</xn-button>

    <!-- <x-rate /> -->
    <Rate />
    </div>
  </div>
</template>

<script>
import { XDate } from "./components";
export default {
  name: "App",
  components: { "x-date": XDate },
  data() {
    return {
      date: new Date(),
      isShow: false,
      innerShow: false,
      taobao: "coupon",
    };
  },
  methods: {
    showDrawer() {
      this.isShow = !this.isShow;
    },
    showInnerDrawer() {
      this.innerShow = !this.innerShow;
    },
    changeIcon(e) {
      console.log("e", typeof e.target.className);
      e.target.className = "ivu-icon iconfont icon-crmdaohangicon-18";
    },
  },
};
</script>

<style lang="scss">
@import "./styles/common.scss";
// 水波纹
@keyframes waveMove {
  from {
    background-position: 0 100%;
  }
  to {
    background-position: -20px 100%;
  }
}
.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
.waves-box {
  min-height: 213px;
  position: relative;
  background: linear-gradient(60deg, #05f 0%, #0bf 100%);
  color: white;
  h1.waves-inner {
    text-align: center;
    height: 113px;
    line-height: 113px;
  }
  .waves {
    position: relative;
    width: 100%;
    height: 15vh;
    margin-bottom: -7px;
    min-height: 100px;
    max-height: 150px;
  }
}

.icon-wrapper {
  padding-top: 21px;
  .nav {
    // padding: 21px;
    color: $warning;
    .iconfont {
      font-size: 21px;
      padding: 21px;
      &:hover {
        color: $primary;
      }
    }
  }
}
</style>
