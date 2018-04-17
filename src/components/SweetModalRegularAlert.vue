<template>
  <div>
    <slot name="button" ></slot>

    <sweet-modal :icon="icon" ref="modal" >
      <slot name="sweetContent"></slot>      
    </sweet-modal>
  </div>
</template>
<script>
import { SweetModal } from 'sweet-modal-vue'
export default {
  name: 'sweetmodalregularalert',
  props: {

    icon: {
      type: String,
      default: 'success'
    }

  },
  components: {
    SweetModal
  }
}
</script>
<style lang="css" scoped>
@import '../style/SweetModalScoped.css';
</style>
<style lang="css">
@import '../style/SweetModal.css';
</style>
