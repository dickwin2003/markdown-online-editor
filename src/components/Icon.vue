<!-- @format -->

<template>
  <svg class="svg-icon" :class="iconClass">
    <use :xlink:href="'#' + name"></use>
  </svg>
</template>

<script>
import { computed } from 'vue'
import Icons from '@assets/icons'

export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true,
      default: '',
      validator(val) {
        return Icons[val]
      }
    }
  },
  setup(props) {
    const iconClass = computed(() => 'icon-' + props.name)
    return {
      iconClass
    }
  }
}
</script>

<style lang="less">
@import './../assets/styles/style.less';
.svg-icon {
  width: @font-medium;
  height: @font-medium;
}
</style>
