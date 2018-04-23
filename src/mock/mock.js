import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
// import { tableData } from './data/tableData'

import { apiValidateCoupon } from '../api/api'

export default {
  init () {
    let mock = new MockAdapter(axios)

    // 驗證資料
    mock.onPost(apiValidateCoupon).reply(config => {
      // 驗證
      let { coupon } = JSON.parse(config.data).params

      const validCoupons = ['SUMMER2016', 'WINTER2016', 'FALL2016']

      return new Promise((resolve, reject) => {
        const valid =
          coupon && validCoupons.indexOf(coupon.toUpperCase()) !== -1
        setTimeout(() => {
          resolve([
            200,
            {
              valid: valid,
              message: valid ? '' : `${coupon} is already taken.`
            }
          ])
        }, 500)
      })
    })
  }
}
