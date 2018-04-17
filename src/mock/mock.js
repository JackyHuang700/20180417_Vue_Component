import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { tableData } from './data/tableData'

import { apiDataTableGet } from '../api/api'

export default {
  init () {
    let mock = new MockAdapter(axios)

    mock.onGet(apiDataTableGet).reply(config => {
      debugger
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([
            200,
            tableData
          ])
        }, 500)
      })
    })
  }
}
