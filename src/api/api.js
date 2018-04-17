import axios from 'axios'

export const apiDataTableGet = '/api/DataTable/Get'

export const methodGetDataTableGet = params => {
  return axios.get(apiDataTableGet, {
    params: params
  })
}
