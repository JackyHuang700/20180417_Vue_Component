<template>
  <div>

    <form @submit.prevent="validateBeforeSubmit(('form1'))" data-vv-scope="form1">
      <div class="column is-12">
        <label class="label">Email</label>
        <p class="control has-icon has-icon-right">
          <input name="email" v-model="form1.email" v-validate.initial="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
          <i v-show="errors.has('email')" class="fa fa-warning"></i>
          <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
        </p>
      </div>
      <div class="column is-12">
        <label class="label">Name</label>
        <p class="control has-icon has-icon-right">
          <input name="name" v-model="form1.name" v-validate.initial="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Name">
          <i v-show="errors.has('name')" class="fa fa-warning"></i>
          <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
        </p>
      </div>
      <div class="column is-12">
        <label class="label">Phone</label>
        <p class="control has-icon has-icon-right">
          <input name="phone" v-model="form1.phone" v-validate.initial="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('phone') }" type="text" placeholder="Phone">
          <i v-show="errors.has('phone')" class="fa fa-warning"></i>
          <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
        </p>
      </div>
      <div class="column is-12">
        <label class="label">Website</label>
        <p class="control has-icon has-icon-right">
          <input name="url" v-model="form1.url" v-validate.initial="'required|url'" :class="{'input': true, 'is-danger': errors.has('url') }" type="text" placeholder="Website">
          <i v-show="errors.has('url')" class="fa fa-warning"></i>
          <span v-show="errors.has('url')" class="help is-danger">{{ errors.first('url') }}</span>
        </p>
      </div>

      <div class="column is-12">
        <p class="control">
          <button class="button is-primary" type="submit">Submit</button>
        </p>
      </div>
    </form>
    <form @submit.prevent="validateBeforeSubmit(('form2'))" data-vv-scope="form2">
      <div class="column is-12">
        <label class="label">Email</label>
        <p class="control has-icon has-icon-right">
          <input name="email" v-model="form2.email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
          <i v-show="errors.has('email')" class="fa fa-warning"></i>
          <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
        </p>
      </div>
      <div class="column is-12">
        <label class="label">Name</label>
        <p class="control has-icon has-icon-right">
          <input name="name" v-model="form2.name" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Name">
          <i v-show="errors.has('name')" class="fa fa-warning"></i>
          <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
        </p>
      </div>
      <div class="column is-12">
        <label class="label">Phone</label>
        <p class="control has-icon has-icon-right">
          <input name="phone" v-model="form2.phone" v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('phone') }" type="text" placeholder="Phone">
          <i v-show="errors.has('phone')" class="fa fa-warning"></i>
          <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
        </p>
      </div>
      <div class="column is-12">
        <label class="label">Website</label>
        <p class="control has-icon has-icon-right">
          <input name="url" v-model="form2.url" v-validate="'required|url'" :class="{'input': true, 'is-danger': errors.has('url') }" type="text" placeholder="Website">
          <i v-show="errors.has('url')" class="fa fa-warning"></i>
          <span v-show="errors.has('url')" class="help is-danger">{{ errors.first('url') }}</span>
        </p>
      </div>

      <div class="column is-12">
        <p class="control">
          <button class="button is-primary" type="submit">Submit</button>
        </p>
      </div>
    </form>

  </div>
</template>
<script>
// import VeeValidate from 'vee-validate'
export default {
  name: 'veevalidate3',
  props: {

  },
  data () {
    return {
      form1: {
        email: '',
        name: '',
        phone: '',
        url: ''
      },
      form2: {
        email: '',
        name: '',
        phone: '',
        url: '',
        radio_group_1: ''
      }
    }
  },
  methods: {

    validateBeforeSubmit (scope) {
      console.log('validateBeforeSubmit')
      this.$validator.validateAll(scope).then((result) => {
        // console.log(`進行驗證${result}`);
        // console.log(this.$validator);
        console.log(`${scope}:${result}`)
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!');
          return
        }

        alert('Correct them errors!')
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




