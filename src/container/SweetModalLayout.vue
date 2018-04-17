<template>
  <div>
    <!-- sweet-modal-vue -->
    <!-- https://github.com/vuejs-templates/webpack/issues/288#event-809670982 -->
    <!-- npm install node-sass sass-loader -s -->

    <SweetModalRegularAlert>
      <template slot="button">
        <button type="button" @click="regularAlertMethod">regularAlert</button>
      </template>
      <template slot="sweetContent">
        This is a success!
      </template>
    </SweetModalRegularAlert>

    <SweetModalErrorandButtonAlert>
      <template slot="button">
        <button type="button" @click="alertwithErrorandButton">alertwithErrorandButton</button>
      </template>
      <template slot="sweetContent">
        This is an error…
      </template>
      <!-- <template slot="footerButton">
        <a slot="button" class="sweet-button color-blue color-white" v-on:click="closeExample">That's fine!</a>
      </template> -->
    </SweetModalErrorandButtonAlert>

    <SweetModalDarkwithBlockingErrorAlert>
      <template slot="button">
        <button type="button" @click="darkwithBlockingError">DarkwithBlockingError</button>
      </template>
      <template slot="sweetContent">
        This is an error…
      </template>
    </SweetModalDarkwithBlockingErrorAlert>

  </div>
</template>
<script>
import { SweetModalRegularAlert,
  SweetModalErrorandButtonAlert,
  SweetModalDarkwithBlockingErrorAlert} from '../components/index'
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
export default {
  name: 'sweetmodallayout',
  data () {
    return {
    }
  },
  methods: {

    regularAlertMethod () {
      this.$children[0].$refs.modal.open()
    },

    alertwithErrorandButton () {
      this.$children[1].$refs.modal.open()
    },

    darkwithBlockingError () {
      console.info(this)
      this.$children[2].$refs.modal.open()
    },

    closeExample (msg) {
      console.log(this.$refs.modal.close())
    }
  },
  components: {
    SweetModal,
    SweetModalTab,
    SweetModalRegularAlert,
    SweetModalErrorandButtonAlert,
    SweetModalDarkwithBlockingErrorAlert
  }
}
</script>
