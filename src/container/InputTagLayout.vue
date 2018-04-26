<template>
  <div>
    vue-input-tag
    <InputTag placeholder="Add Tag" :tags.sync="tags" :limit="limit"></InputTag>
  </div>
</template>
<script>
import { InputTag } from '../components/index'
export default {
  name: 'inputtaglayout',
  props: {

  },
  data () {
    return {
      tags: ['Jerry', 'Kramer', 'Elaine', 'George'],
      limit: 10
    }
  },
  methods: {},
  components: {
    InputTag
  }
}
</script>
<style lang="css" scoped>

</style>
