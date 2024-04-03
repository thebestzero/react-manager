import axios, { AxiosRequestConfig } from 'axios'
import env from '@/config'
import stroage from '@/utils/stroage'
import { Result } from '@/types/api'
import { message } from '@/utils/AntdGlobal'
import { hideLoading, showLoading } from '@/utils/loading'

const instance = axios.create({
  timeout: 8000,
  timeoutErrorMessage: '请求超时，请稍后再试',
  withCredentials: true
})

instance.interceptors.request.use(
  request => {
    if (request.showLoading) showLoading()
    const token = stroage.get('token')
    if (token) request.headers.Authorization = 'Bearer' + token
    if (env.mock) {
      request.baseURL = env.mockApi
    } else {
      request.baseURL = env.baseApi
    }

    return { ...request }
  },
  error => {
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  response => {
    hideLoading()
    const data: Result = response.data
		if (data.code === 0){
			message.success('success')
		}
    if (data.code === 500001) {
      message.error(data.msg)
      stroage.remove('token')
    } else if (data.code != 0) {
      if (response.config.showError === false) {
        return Promise.resolve(data)
      } else {
        message.error(data.msg)
        return Promise.reject(data)
      }
    }
    return data.data
  },
  error => {
    hideLoading()
    message.error(error.message)
    return Promise.reject(error.message)
  }
)

interface IConfig {
  showLoading?: boolean
  showError?: boolean
}

export default {
  get<T>(url: string, params?: object, option: IConfig = { showLoading: true, showError: true }): Promise<T> {
    return instance.get(url, { params, ...option })
  },
  post<T>(url: string, params?: object, option: IConfig = { showLoading: true, showError: true }): Promise<T> {
    return instance.post(url, params, option)
  }
}
