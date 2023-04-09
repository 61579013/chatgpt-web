import type { AxiosProgressEvent, GenericAbortSignal } from 'axios'
import { get, post } from '@/utils/request'
import { useSettingStore } from '@/store'
import {UserInfo} from "@/store/modules/user/helper";

export function fetchChatAPI<T = any>(
  prompt: string,
  options?: { conversationId?: string; parentMessageId?: string },
  signal?: GenericAbortSignal,
) {
  return post<T>({
    url: '/chat',
    data: { prompt, options },
    signal,
  })
}

export function fetchChatConfig<T = any>() {
  return get<T>({
    url: '/info',
  })
}

export function fetchChatAPIProcess<T = any>(
  params: {
    prompt: string
    options?: { conversationId?: string; parentMessageId?: string }
    signal?: GenericAbortSignal
    onDownloadProgress?: (progressEvent: AxiosProgressEvent) => void },
) {
  const settingStore = useSettingStore()

  return post<T>({
    url: '/chat-process',
    data: { prompt: params.prompt, options: params.options, systemMessage: settingStore.systemMessage },
    signal: params.signal,
    onDownloadProgress: params.onDownloadProgress,
  })
}

export function fetchSession<T>() {
  return post<T>({
    url: '/session',
  })
}

export function fetchVerify<T>(token: string) {
  return post<T>({
    url: '/verify',
    data: { token },
  })
}


export function sendEmail<T = any>(
	email: string,
	token: string
) {
	return post<T>({
		url: '/sendMail',
		data: {email, token},
	})
}

export function accountLogin<T = any>(
	email: string,
	code: string
) {
	return post<T>({
		url: '/login',
		data: {email, code},
	})
}

export function accountlogout<T = any>() {
	return get<T>({
		url: '/logout',
	})
}

export function fetchConfig<T = any>() {
	return get<T>({
		url: '/config'
	})
}

export function fetchUsetInfo<T = any>() {
	return get<T>({
		url: '/user'
	})
}

export function setUsetInfo<T = any>(userInfo: Partial<UserInfo>) {
	return post<T>({
		url: '/user',
		data: userInfo
	})
}

export function fetchPrompts<T = any>() {
	return get<T>({
		url: '/prompts'
	})
}

export function fetchCard<T = any>() {
	return get<T>({
		url: '/card'
	})
}

export function fetchCards<T = any>() {
	return get<T>({
		url: '/cards'
	})
}

export function checkCard<T = any>(
	cardNo: string
) {
	return post<T>({
		url: '/card/check',
		data: {cardNo}
	})
}

export function fetchChats<T = any>() {
	return get<T>({
		url: '/chats'
	})
}
