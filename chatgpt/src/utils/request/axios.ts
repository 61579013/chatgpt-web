import axios, { type AxiosResponse } from 'axios'
import {getUserToken} from "@/store/modules/user/helper";

const service = axios.create({
  baseURL: import.meta.env.VITE_GLOB_API_URL,
})

service.interceptors.request.use(
	(config) => {
		const token = getUserToken()
		if (token) {
			config.headers['Authorization'] = 'Bearer ' + token;
		}
		return config
	},
	(error) => {
		return Promise.reject(error.response)
	},
)

service.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (response.status === 200)
      return response

    throw new Error(response.status.toString())
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default service
