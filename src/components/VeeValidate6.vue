<template>

  <form @submit.prevent="validateForm">
    <div class="columns is-multiline">
      <div class="column is-12">
        <label class="label">coupon</label>
        <p class="control has-icon has-icon-right">
          <input name="coupon" v-model="coupon" v-validate="'required|my_coupon'" :class="{'input': true, 'is-danger': errors.has('coupon') }" type="text" placeholder="Coupon">
          <i v-show="errors.has('coupon')" class="fa fa-warning"></i>
          <span v-show="errors.has('coupon')" class="help is-danger">{{ errors.first('coupon') }}</span>
        </p>
      </div>
      <div class="column is-12">
        <p class="control">
          <button type="submit" class="button is-primary">Submit</button>
        </p>
      </div>
    </div>
  </form>
</template>
<script>

export default {
  name: 'backendexample',
  props: {

  },
  data () {
    return {
      coupon: ''
    }
  },
  methods: {

    validateForm () {
      this.$validator.validateAll().then((result) => {
        console.log('validateForm[result]:', result)
      })
    }

  },
  computed: {

  },

  watch: {

  },
  components: {
    // VeeValidate
  }
}
</script>
<style lang="css" scoped>

</style>




