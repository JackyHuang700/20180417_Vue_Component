import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW'

import { methodValidateCoupon } from '../api/api'

Validator.localize('zh_TW', zhTW)

// // 自定义validate
const dictionary = {
  zh_TW: {
    messages: {
      email: () => '請輸入正確的信箱格式',
      name: () => '請輸入姓名',
      required: field => '請輸入' + field
    },
    attributes: {
      email: '信箱',
      password: '登錄密碼',
      password_confirmation: '確認密码',
      name: '帳號',
      realName: '真實姓名',
      idCard: '身份證',
      bank: '銀行',
      region: '開户行地址',
      bankNo: '銀行卡號',
      reBankCode: '確認卡號',
      oldPayPass: '原交易密碼',
      payPass: '交易密碼',
      rePayPass: '確認密碼',
      oldPwd: '原登錄密碼',
      newPwd: '登錄密碼',

      sure: '確認密碼',
      code: '驗證碼',
      mobile: '手機號',
      emailcode: '驗證碼'
    }
  }
}

const config = {
  locale: 'zh_TW'
}

Validator.localize(dictionary)
Vue.use(VeeValidate, config)

// 自定義規則
Validator.extend('cccccc', {
  getMessage: field => field + '必须是cccccc',
  validate: value => {
    return value.length > 4
  }
})

// 密碼確認
// Validator.extend('confirmPassword', {
//   getMessage: field => '確認密碼錯誤',
//   validate: val => val === val2
// })

// 折價卷
Validator.extend('my_coupon', {
  validate: value =>
    new Promise(resolve => {
      methodValidateCoupon({
        coupon: value
      }).then(resp => {
        return resolve({
          valid: resp.data.valid
        })
      })
    }),
  getMessage: (field, params, data) => {
    return '驗證碼錯誤'
  }
})
