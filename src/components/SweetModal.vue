<template>
  <div>
    <!-- sweet-modal-vue -->
    <!-- https://github.com/vuejs-templates/webpack/issues/288#event-809670982 -->
    <!-- npm install node-sass sass-loader -s -->
    <button type="button" @click="alertwithErrorandButton">alertwithErrorandButton</button>
    <button type="button" @click="darkwithBlockingError">DarkwithBlockingError</button>
    <button type="button" @click="regularAlert">regularAlert</button>

    <sweet-modal icon="success" ref="modal">
      This is a success!
    </sweet-modal>

    <sweet-modal icon="error" title="Oh noes…" ref="modal3">
      This is an error…
      <a slot="button" class="sweet-button color-blue color-white" v-on:click="closeExample2('darkWithBlockingError')">That's fine!</a>
    </sweet-modal>

    <sweet-modal icon="error" hide-close-button blocking overlay-theme="dark" modal-theme="dark" ref="modal2">
      This is an error…
      <a slot="button" class="sweet-button color-red " v-on:click="closeExample('darkWithBlockingError')">Press this Button</a>
    </sweet-modal>

  </div>
</template>
<script>
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
export default {
  name: 'sweetmodal',
  data () {
    return {}
  },
  methods: {

    regularAlert () {
      this.$refs.modal.open()
    },

    alertwithErrorandButton () {
      this.$refs.modal3.open()
    },

    darkwithBlockingError () {
      this.$refs.modal2.open()
    },

    closeExample (msg) {
      console.log(this.$refs.modal2.close())
    },

    closeExample2 (msg) {
      console.log(this.$refs.modal3.close())
    }

  },
  components: {
    SweetModal,
    SweetModalTab
  }
}
</script>
