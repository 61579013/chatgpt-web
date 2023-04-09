<script setup lang='ts'>
import {computed} from 'vue'
import { HoverButton, SvgIcon, UserAvatar } from '@/components/common'
import {useUserStore} from "@/store";
import {accountlogout} from "@/api";
import {removeUserState, removeUserToken} from "@/store/modules/user/helper";
import {useDialog} from "naive-ui";

const dialog = useDialog()
const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)

const logout = async () => {
	dialog.warning({
		title: '退出登录',
		content: '是否要退出当前账号',
		positiveText: '确认',
		negativeText: '取消',
		onPositiveClick: () => {
			accountlogout().then(res => {
				if (res.status === "Success") {
					removeUserToken()
					removeUserState()
					userStore.resetUserInfo()
				}
			})
		},
	})
}


</script>

<template>
  <footer class="flex items-center justify-between min-w-0 p-4 overflow-hidden border-t dark:border-neutral-800">
    <div class="flex-1 flex-shrink-0 overflow-hidden">
      <UserAvatar />
    </div>
    <HoverButton v-if="userInfo.status === 1" tooltip="退出登录" @click="logout">
      <span class="text-xl text-[#4f555e] dark:text-white">
        <SvgIcon icon="ri:logout-box-r-line" />
      </span>
    </HoverButton>
  </footer>
</template>
