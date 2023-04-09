import { ss } from '@/utils/storage'
import {fetchPrompts} from "@/api";

const LOCAL_NAME = 'promptStore'

export type PromptList = []

export interface PromptStore {
  promptList: PromptList
}

export function getLocalPromptList(): PromptStore {
  const promptStore: PromptStore | undefined = ss.get(LOCAL_NAME)
	fetchPrompts().then(res => {
		if (res.status === "Success") {
			let promptList= res.data
			setLocalPromptList({ promptList })
		}
	})

  return promptStore ?? { promptList: [] }
}

export function setLocalPromptList(promptStore: PromptStore): void {
  ss.set(LOCAL_NAME, promptStore)
}
