<template>
  <div>
    <label for="">VeeValidate</label>
    <VeeValidate></VeeValidate>
    <br/>
    <label for="">VeeValidate2</label>
    <VeeValidate2></VeeValidate2>
    <br/>
    <label for="">VeeValidate3</label>
    <VeeValidate3></VeeValidate3>
    <br/>
    <label for="">VeeValidate4，非同步驗證，模擬後端</label>
    <VeeValidate4></VeeValidate4>
    <label for="">VeeValidate5，混合型表單</label>
    <VeeValidate5></VeeValidate5>
    <label for="">Backend Validation，後端驗證</label>
    <VeeValidate6></VeeValidate6>
  </div>
</template>
<script>
import {
  VeeValidate,
  VeeValidate2,
  VeeValidate3,
  VeeValidate4,
  VeeValidate5,
  VeeValidate6
} from '../components/index'
export default {
  name: 'veevalidatelayout',
  props: {

  },
  data () {
    return {}
  },
  methods: {},
  computed: {

  },
  watch: {

  },
  components: {
    VeeValidate,
    VeeValidate2,
    VeeValidate3,
    VeeValidate4,
    VeeValidate5,
    VeeValidate6
  }
}
</script>
<style lang="css" scoped>

</style>
