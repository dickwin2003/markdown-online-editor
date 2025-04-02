<!-- @format -->

<template>
  <header class="header-wrapper">
    <h1 class="header-area">
      <a href="/" class="header-link" target="_self">
        <img
          class="mark-markdown"
          src="@assets/images/markdown.png"
          alt="Arya 在线 Markdown 编辑器 Logo"
        />
        <strong v-if="!isMobile" class="header-text">{{ titleText }}</strong>
      </a>
      <nav class="button-group">
        <!--
        <a href="#" class="header-link" @click.prevent="clearContent">
          <span class="hint--bottom" aria-label="清除内容">
            <SvgIcon class="header-icon" name="document" />
          </span>
        </a>
        -->
        <a href="#" class="header-link" @click.prevent="exportToDocx">
          <span class="hint--bottom" aria-label="导出 DOCX">
            <SvgIcon class="header-icon" name="download" />
          </span>
        </a>
        <a
          v-if="!isMobile"
          href="http://gzfc.site/"
          class="header-link"
          target="_blank"
          rel="noopener"
        >
          <span class="hint--bottom" aria-label="公众号 Markdown 排版">
            <SvgIcon class="header-icon" name="wechat" />
          </span>
        </a>
        <a href="http://gzfc.site/" class="header-link" target="_blank" rel="noopener">
          <span class="hint--bottom" aria-label="无语风城">
            <SvgIcon class="header-icon" name="homepage" />
          </span>
        </a>
        <a
          v-if="!isMobile"
          href="https://x.com/dickwin2003"
          class="header-link"
          target="_blank"
          rel="noopener"
        >
          <span class="hint--bottom" aria-label="X - 条子">
            <SvgIcon class="header-icon" name="x" />
          </span>
        </a>
        <a
          v-if="!isMobile"
          href="https://github.com/dickwin2003"
          class="header-link"
          target="_blank"
          rel="noopener"
        >
          <span class="hint--bottom" aria-label="作者 Github">
            <SvgIcon class="header-icon" name="github" />
          </span>
        </a>
        <router-link to="/about-arya" class="header-link">
          <span class="hint--bottom" aria-label="关于 Arya">
            <SvgIcon class="header-icon" name="document" />
          </span>
        </router-link>
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="hint--bottom el-dropdown-link" aria-label="设置">
            <SvgIcon class="header-icon" name="setting" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item disabled>
                <SvgIcon class="dropdown-icon" name="set-style" />
                <a href="/export/jpeg" target="_self" class="dropdown-text">自定义样式</a>
              </el-dropdown-item>
              <el-dropdown-item command="/export/ppt" divided>
                <SvgIcon class="dropdown-icon" name="preview" />
                <a href="/export/ppt" target="_self" class="dropdown-text">
                  {{ exportTextMap['/export/ppt'] }}
                </a>
              </el-dropdown-item>
              <el-dropdown-item command="/export/png" divided>
                <SvgIcon class="dropdown-icon" name="download" />
                <a href="/export/png" target="_self" class="dropdown-text">{{
                  exportTextMap['/export/png']
                }}</a>
              </el-dropdown-item>
              <el-dropdown-item command="/export/jpeg">
                <SvgIcon class="dropdown-icon" name="download" />
                <a href="/export/jpeg" target="_self" class="dropdown-text">{{
                  exportTextMap['/export/jpeg']
                }}</a>
              </el-dropdown-item>
              <el-dropdown-item command="/export/pdf">
                <SvgIcon class="dropdown-icon" name="download" />
                <a href="/export/pdf" target="_self" class="dropdown-text">
                  {{ exportTextMap['/export/pdf'] }}
                </a>
              </el-dropdown-item>
              <el-dropdown-item command="/export/docx">
                <SvgIcon class="dropdown-icon" name="download" />
                <a href="/export/docx" target="_self" class="dropdown-text">
                  {{ exportTextMap['/export/docx'] }}
                </a>
              </el-dropdown-item>
              <el-dropdown-item command="/export/html" disabled divided>
                <SvgIcon class="dropdown-icon" name="download" />
                <a href="/export/html" target="_self" class="dropdown-text">导出 HTML</a>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span
          v-if="!isMobile"
          aria-label="全屏"
          class="hint--bottom full-screen"
          @click="onFullScreenClick"
        >
          <SvgIcon class="header-icon" name="full-screen" />
        </span>
      </nav>
    </h1>
  </header>
</template>

<script>
import 'hint.css'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { exportTextMap } from '@config/constant'
import SvgIcon from '@components/Icon.vue'

export default {
  name: 'HeaderNav',
  components: {
    SvgIcon
  },
  setup() {
    const router = useRouter()
    const isMobile = ref(window.innerWidth <= 768)
    const titleText = ref(window.$appTitle)

    const launchFullScreen = () => {
      const element = document.getElementById('vditor')
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
      }
    }

    const cancelFullScreen = () => {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      }
    }

    const onFullScreenClick = () => {
      const isFullScreen =
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement ||
        document.webkitFullscreenElement
      isFullScreen ? cancelFullScreen() : launchFullScreen()
    }

    const handleCommand = (command) => {
      router.push(command)
    }

    const clearContent = () => {
      if (window.confirm('确定要清除所有内容吗？')) {
        localStorage.setItem('vditorvditor', '')
        window.location.reload()
      }
    }

    const exportToDocx = async () => {
      const content = localStorage.getItem('vditorvditor')
      if (!content) {
        ElMessage.error('没有找到可导出的内容')
        return
      }

      try {
        ElMessage({
          message: '正在转换为 DOCX 格式，请稍候...',
          type: 'info'
        })

        const response = await fetch('http://localhost:3000/api/convert-to-docx', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ content })
        })

        if (!response.ok) {
          const error = await response.json()
          throw new Error(error.error || '转换失败')
        }

        // Get the docx blob from response
        const docxBlob = await response.blob()
        const url = URL.createObjectURL(docxBlob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'document.docx'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)

        ElMessage({
          message: 'DOCX 文件已生成并下载',
          type: 'success'
        })
      } catch (error) {
        ElMessage.error(error.message || '转换失败，请重试')
      }
    }

    return {
      isMobile,
      titleText,
      exportTextMap,
      onFullScreenClick,
      handleCommand,
      clearContent,
      exportToDocx
    }
  }
}
</script>

<style lang="less">
@import './../../assets/styles/style.less';

[class*='hint--']:after {
  border-radius: 3px;
}

.el-popper[x-placement^='bottom'] {
  margin-top: 10px;
}

.el-dropdown .el-dropdown-link {
  height: @header-height;
  .flex-box-center(column);
}

.hint--bottom {
  cursor: pointer;
  pointer-events: all;
}

.el-dropdown-menu {
  margin: 0;

  .dropdown-icon {
    fill: @deep-black;
    vertical-align: middle;
    margin-right: 10px;
  }

  .dropdown-text {
    vertical-align: middle;
  }
}

.header-wrapper {
  position: fixed;
  top: 0;
  width: 100%;
  height: @header-height;
  line-height: @header-height;
  z-index: @hint-css-zindex;
  background-color: #fff;
  box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.1);
  transition:
    border 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955),
    background 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);

  .header-area {
    width: 80%;
    max-width: @max-body-width;
    height: 100%;
    margin: auto;
    text-align: left;

    .header-link {
      display: inline-flex;
      height: @header-height;
      line-height: @header-height;

      .mark-markdown {
        width: @header-height;
        vertical-align: middle;
      }

      .header-text {
        margin-left: 10px;
        font-size: @font-medium;
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        background-image: linear-gradient(to right, #000000, #434343);
        vertical-align: middle;
      }
    }

    .button-group {
      float: right;

      .header-icon {
        margin: 0 10px;
        fill: @deep-black;
      }

      .full-screen {
        margin-right: -10px;
      }
    }
  }
}

@media (max-width: 960px) {
  .header-wrapper {
    .header-area {
      display: flex;
      width: 100%;
      padding: 0 10px;
      .flex-box-center(row, space-between);

      .header-link {
        display: inline;
      }
    }
  }
}
</style>
