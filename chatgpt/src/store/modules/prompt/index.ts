import { defineStore } from 'pinia'
import type { PromptStore } from './helper'
import { getLocalPromptList, setLocalPromptList } from './helper'
import {fetchPrompts} from "@/api";

export const usePromptStore = defineStore('prompt-store', {
  state: (): PromptStore => getLocalPromptList(),

  actions: {
    updatePromptList(promptList: []) {
      this.$patch({ promptList })
      setLocalPromptList({ promptList })
    },
    getPromptList() {
			fetchPrompts().then(res => {
				if (res.status === "Success") {
					let promptList= res.data
					setLocalPromptList({ promptList })
				}
			})
    },
  },
})
