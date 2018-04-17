<template>
  <div>
    <slot name="button"></slot>

    <sweet-modal :icon="icon" hide-close-button blocking overlay-theme="dark" modal-theme="dark" ref="modal">
      <slot name="sweetContent"></slot>
      <slot name="footerButton">
        <a slot="button" class="sweet-button color-red " @click="closeExample('darkWithBlockingError')">Press this Button</a>
      </slot>
    </sweet-modal>
  </div>
</template>
<script>
import { SweetModal } from 'sweet-modal-vue'
export default {
  name: 'sweetmodalerrorandbuttonalert',
  props: {

    icon: {
      type: String,
      default: 'error'
    }

  },
  methods: {

    closeExample (event) {
      this.$refs.modal.close()
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