import axios from './axios'
import api from './api'
import consts from './const'
import polkaApi from "./polkaApi";

export default {
  install: (Vue) => {
    Vue.prototype.$api = api
    Vue.prototype.$ajax = axios
    Vue.prototype.$const = consts
    Vue.prototype.$polka = polkaApi;
    // 需要挂载的都放在这里
  }
}
