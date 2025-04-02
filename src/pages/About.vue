<!-- @format -->

<template>
  <PreviewVditor :pdata="pdata" @callback="handleCallBack" />
</template>

<script>
import PreviewVditor from '@components/PreviewVditor'
import AboutAryaMd from '@config/aboutArya'

export default {
  name: 'AboutArya',
  components: {
    PreviewVditor
  },
  data() {
    return {
      isLoading: true,
      pdata: AboutAryaMd
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleCallBack() {
      this.isLoading = false
    }
  }
}
</script>
