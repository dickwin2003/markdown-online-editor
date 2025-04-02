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
import html2pdf from 'html2pdf.js'
import PreviewVditor from '@components/PreviewVditor'

export default {
  name: 'ExportPdf',
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
  methods: {
    exportAndDownloadPdf(element, filename) {
      const opt = {
        margin: 1,
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      }
      html2pdf().set(opt).from(element).save()
    },
    onBackToMainPage() {
      this.$router.push('/')
    },
    onExportBtnClick() {
      const element = document.querySelector('.vditor-reset')
      const filename = `arya-${new Date().getTime()}.pdf`
      this.exportAndDownloadPdf(element, filename)
    }
  }
}
</script>
