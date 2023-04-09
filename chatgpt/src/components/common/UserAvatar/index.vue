<script lang='ts' setup>
import {computed, defineAsyncComponent, ref} from 'vue'
import {NAvatar, NButton} from 'naive-ui'
import {useUserStore} from '@/store'
import defaultAvatar from '@/assets/avatar.jpg'

const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)

const Login = defineAsyncComponent(() => import('@/components/common/Account/index.vue'))
const Setting = defineAsyncComponent(() => import('@/components/common/Setting/index.vue'))

const show = ref({
	login: true,
	setting: false
})

</script>

<template>
	<div class="flex items-center">
		<div class="w-10 h-10 rounded-full">
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
				<NButton text>
					<NAvatar :src="defaultAvatar" round size="large"/>
				</NButton>
			</template>
		</div>
		<div class="ml-2 w-10">
			<NButton size="large" v-if="userInfo.status === 1" text @click="show.setting = true">
				<h2 class="font-bold text-md overflow-ellipsis">
					{{ userInfo.name }}
				</h2>
			</NButton>

			<NButton v-else text @click="show.login = true">
				<h2 class="font-bold text-md">
					登录/注册
				</h2>
			</NButton>

			<Login v-if="userInfo.status === 0" v-model:visible="show.login"/>

			<Setting v-if="show" v-model:visible="show.setting" />
		</div>
	</div>
</template>
