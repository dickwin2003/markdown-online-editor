<!-- @format -->

<template>
  <div class="export-page">
    <div class="button-group">
      <el-button round @click="onBackToMainPage">返回主页</el-button>
      <el-button type="primary" round @click="onExportBtnClick">生成导出</el-button>
    </div>
    <PreviewVditor :pdata="pdata" />
  </div>
</template>

<script>
import { generateScreenshot } from '@helper/export'
import PreviewVditor from '@components/PreviewVditor'

export default {
  name: 'ExportImage',
  components: {
    PreviewVditor
  },
  data() {
    return {
      isLoading: true,
      pdata: localStorage.getItem('vditorvditor')
    }
  },
  created() {},
  mounted() {},
  updated() {},
  methods: {
    async exportAndDownloadImg(element, filename) {
      const canvas = await generateScreenshot(element)
      const isSupportDownload = 'download' in document.createElement('a')
      if (isSupportDownload) {
        const link = document.createElement('a')
        link.download = filename
        link.href = canvas.toDataURL()
        link.click()
      }
      this.isLoading = false
    },
    onBackToMainPage() {
      this.$router.push('/')
    },
    onExportBtnClick() {
      this.isLoading = true
      const element = document.querySelector('.vditor-reset')
      const filename = `arya-${new Date().getTime()}.png`
      this.exportAndDownloadImg(element, filename)
    }
  }
}
</script>
