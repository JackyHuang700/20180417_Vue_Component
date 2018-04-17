<template>
  <div >
    <br><br>
    <h1>Vue-IziToast</h1>
    <small>
      <a href="https://github.com/arthurvasconcelos/vue-izitoast" target="_blank">
        https://github.com/arthurvasconcelos/vue-izitoast
      </a>
    </small>
    <br><br>
    <button class="btn btn-outline-primary" v-on:click="$toast.show('Welcome!', 'Hey', baseNotificationSystem.options.show)">Show</button>&nbsp;
    <button class="btn btn-outline-secondary" v-on:click="$toast.show('Welcome!', 'Hey', baseNotificationSystem.options.ballon)">Ballon</button>&nbsp;
    <button class="btn btn-outline-info" v-on:click="$toast.info('Welcome!', 'Hello', baseNotificationSystem.options.info)">Info</button>&nbsp;
    <button class="btn btn-outline-success" v-on:click="$toast.success('Successfully inserted record!', 'OK', baseNotificationSystem.options.success)">Success</button>&nbsp;
    <button class="btn btn-outline-warning" v-on:click="$toast.warning('You forgot important data', 'Caution', baseNotificationSystem.options.warning)">Warning</button>&nbsp;
    <button class="btn btn-outline-danger" v-on:click="$toast.error('Illegal operation', 'Error', baseNotificationSystem.options.error)">Error</button>&nbsp;
    <button class="btn btn-outline-dark" v-on:click="$toast.question('Are you sure about that?', 'Hey', baseNotificationSystem.options.question)">Question</button>
  </div>
</template>

<script>
import { notificationSystem, position } from '../Config/izitoastConfig'
export default {
  name: 'izitoast',
  data () {
    return {
      notificationSystem: notificationSystem
    }
  },
  computed: {
    baseNotificationSystem () {
      let baseConfig = this.notificationSystem
      baseConfig.options.info.position = position.bottomRight
      console.error(baseConfig.options.info.position)
      return baseConfig
    }
  }
}
</script>

<style lang="css" scoped>
</style>
<style lang="css">

</style>
