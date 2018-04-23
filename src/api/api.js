import axios from 'axios'

export const apiValidateCoupon = '/api/validate/coupon'

export const methodValidateCoupon = params => {
  return axios.post(apiValidateCoupon, {
    params: params
  })
}
