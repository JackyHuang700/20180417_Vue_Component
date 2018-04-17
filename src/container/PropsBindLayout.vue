<template>
  <div>
    <SwitchBtnPropsBind :result="result" @on-result-change="onResultChange"></SwitchBtnPropsBind>
    <input type="button" value="change" @click="change">
  </div>
</template>
<script>
import { SwitchBtnPropsBind } from '../components'
export default {
  name: 'propsbindlayout',
  data () {
    return {}
  },
  methods: {
    change () {
      this.result = !this.result
    },
    onResultChange (val) {
      this.result = val// ④外层调用组件方注册变更方法，将组件内的数据变更，同步到组件外的数据状态中
    }
  },
  components: {
    SwitchBtnPropsBind
  }
}
</script>
