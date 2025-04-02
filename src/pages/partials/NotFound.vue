<!-- @format -->

<template>
  <div class="error-404">
    <div class="error-404-body">
      <div class="error-404-body-title">
        <span class="left-four">4</span>
        <span class="cener-zero">0</span>
        <span class="right-four">4</span>
      </div>
      <p class="error-404-body-message">YOU&nbsp;&nbsp;LOOK&nbsp;&nbsp;LOST</p>
      <div class="error-404-btns">
        <a href="javascript:;" @click="onGoHomeClick"> 返回首页 </a>
        <a href="javascript:;" @click="onBackPageClick">返回上一页</a>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'PageNotFound',
  setup() {
    const router = useRouter()
    const onBackPageClick = () => {
      router.go(-1)
    }
    const onGoHomeClick = () => {
      router.push('/')
    }
    return {
      onBackPageClick,
      onGoHomeClick
    }
  }
}
</script>

<style type="text/css" lang="less">
@keyframes error-404-animation {
  0% {
    transform: rotateZ(0deg);
  }
  20% {
    transform: rotateZ(60deg);
  }
  40% {
    transform: rotateZ(10deg);
  }
  60% {
    transform: rotateZ(-50deg);
  }
  80% {
    transform: rotateZ(20deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}

.error-404 {
  width: 100%;
  height: 100%;
  background: #f8f8f9;
  position: relative;
  .error-404-body {
    width: 476px;
    height: 470px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .error-404-body-title {
      text-align: center;
      font-size: 9.2em;
      font-weight: 700;
      color: #2d8cf0;
      height: 40%;
      span {
        display: inline-block;
        color: #19be6b;
        font-size: 2em;
      }
      .left-four {
        animation: error-404-animation 2.8s ease 0s infinite;
      }
      .cener-zero {
        animation: error-404-animation 2.8s ease 1.4s infinite;
      }
      .right-four {
        animation: error-404-animation 2.8s ease 0.7s infinite;
      }
    }
    .error-404-body-message {
      display: block;
      text-align: center;
      font-size: 30px;
      font-weight: 500;
      letter-spacing: 4px;
      color: #dddde2;
    }
  }
  .error-404-btns {
    text-align: center;
    padding: 20px 0;
    margin-bottom: 40px;
    a {
      display: inline-block;
      margin: 0 4px;
      width: 180px;
      padding: 8px 24px;
      border: 1px solid #dcdee2;
      border-radius: 2px;
      color: #515a6e;
      font-size: 14px;
      line-height: 30px;
      transition: all 0.2s ease-in-out;
      &:hover {
        color: #2d8cf0;
        border-color: #2d8cf0;
      }
    }
  }
}

@media (max-width: 768px) {
  .error-404 {
    .error-404-body {
      width: 100%;
      transform: translate(-50%, -50%) scale(0.8);
    }
  }
}
</style>
