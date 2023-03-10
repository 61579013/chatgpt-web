<script lang='ts' setup>
import {computed, defineAsyncComponent, ref} from 'vue'
import {NAvatar, NButton, useDialog, useMessage} from 'naive-ui'
import {useUserStore} from '@/store'
import defaultAvatar from '@/assets/avatar.jpg'
import {accountlogout} from "@/api";
import {removeUserState, removeUserToken} from "@/store/modules/user/helper";

const message = useMessage()

const dialog = useDialog()
const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)

const Login = defineAsyncComponent(() => import('@/components/common/Account/index.vue'))
const show = ref(true)

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
	<div class="flex items-center">
		<div class="w-10 h-10 overflow-hidden rounded-full">
			<template v-if="userInfo?.avatar?.length > 0">
				<NButton text>
					<NAvatar
						:fallback-src="defaultAvatar"
						:src="userInfo.avatar"
						round
						size="large"
					/>
				</NButton>
			</template>
			<template v-else>
				<NButton text @click="show = true">
					<NAvatar :src="defaultAvatar" round size="large"/>
				</NButton>
			</template>
		</div>
		<div class="ml-2">

			<NButton v-if="userInfo.status === 1" text @click="logout">
				<h2 class="font-bold text-md">
					退出登录
				</h2>
			</NButton>

			<NButton v-else text @click="show = true">
				<h2 class="font-bold text-md">
					登录/注册
				</h2>
			</NButton>

			<Login v-if="userInfo.status === 0" v-model:visible="show"/>
		</div>
	</div>
</template>
