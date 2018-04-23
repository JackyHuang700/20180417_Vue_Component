<template>
  <div>
    <div class="layui-form-item">
      <label class="layui-form-label">帳號</label>
      <div class="layui-block">
        <input v-model="name" v-validate="'required|min:3|alpha'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" name="name" class="layui-input" placeholder="帳號">
        <span v-show="errors.has('name')" class="text-style" v-cloak> {{ errors.first('name') }} </span>
      </div>
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label">帳號2</label>
      <div class="layui-block">
        <input v-model="name2" v-validate="'required|cccccc'" :class="{'input': true, 'is-danger': errors.has('name2') }" type="text" name="name2" class="layui-input" placeholder="帳號2">
        <span v-show="errors.has('name2')" class="text-style" v-cloak> {{ errors.first('name2') }} </span>
      </div>
    </div>

    <div class="layui-form-item">
      <label class="layui-form-label">密碼</label>
      <div class="layui-block">
        <input v-model="settings.password" v-validate="'required|confirmed'" :class="{'input': true, 'is-danger': errors.has('confirmPassword') }" type="text" name="password" class="layui-input" placeholder="密碼">
        <span v-show="errors.has('password')" class="text-style" v-cloak> {{ errors.first('password') }} </span>
      </div>
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label">確認密碼</label>
      <div class="layui-block">
        <input v-model="settings.password_confirmation" v-validate="'required|confirmed:password'" :class="{'input': true, 'is-danger': errors.has('password_confirmation') }" type="text" name="password_confirmation" class="layui-input" placeholder="確認密碼">
        <span v-show="errors.has('password_confirmation')" class="text-style" v-cloak> {{ errors.first('password_confirmation') }} </span>
      </div>
    </div>

    <div :class="{'form-group': true, 'has-error': errors.has('password')}">
      <label for="password" class="control-label">New password</label>
      <input v-validate="'required|confirmed'" type="password" class="form-control" id="password" name="password" placeholder="New Password" v-model="settings.password">
      <p class="help-block" v-if="errors.has('password')">{{errors.first('password')}}</p>
    </div>

    <div :class="{'form-group': true, 'has-error': errors.has('password_confirmation')}">
      <label for="password_confirmation" class="control-label">Verify password</label>
      <input v-validate="'required'" type="password" class="form-control" id="password_confirmation" name="password_confirmation" placeholder="Verify password" v-model="settings.password_confirmation">
    </div>

    {{errors}}
  </div>
</template>
<script>
// import VeeValidate from 'vee-validate'
export default {
  name: 'veevalidate2',
  props: {

  },
  data () {
    return {
      name: '',
      name2: '',
      settings: {
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {

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




