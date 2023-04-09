<script setup lang='ts'>
import {NSpin, useMessage} from 'naive-ui'
import { NButton, NInput, NCard, NGrid, NGi } from 'naive-ui'
import {computed, onMounted, ref} from 'vue'
import {fetchCards, checkCard, fetchConfig} from '@/api'

interface CardState {
	name?: string
  price?: number
}

const message = useMessage()
const cardNo = ref("")

const buttonDisabled = computed(() => {
	return loading.value || !cardNo.value || cardNo.value.trim() === ''
})

const config = ref({})
const loading = ref(false)

async function getConfig() {
	try {
		loading.value = true
		const { data } = await fetchConfig()
		config.value = data
	}
	finally {
		loading.value = false
	}
}

const cardNoRef = ref<typeof NInput | null>(null)
const cards:any = ref<CardState>()

async function getCards() {
	try {
		loading.value = true
		const { data } = await fetchCards<CardState>()
		cards.value = data
	}
	finally {
		loading.value = false
	}
}

const handleSubmit = async () => {
	await checkCard(cardNo.value).then(res => {
		if (res.status === "Success") {
			message.success(res.message as string)
			location.reload()
		} else {
			cardNoRef.value?.focus()
			message.error(res.message as string)
		}
	})
}

onMounted(() => {
	getCards()
	getConfig()
})

</script>

<template>
  <NSpin :show="loading">
    <div class="p-4 space-y-4">
			<NGrid x-gap="12" :cols="2" >
				<NGi v-for="(card, index) in cards">
					<NCard :class="{ 'mt-2': index > 1 }" :title="card.name" hoverable size="medium">
						<div>{{ card.price }}元</div>
					</NCard>
				</NGi>
			</NGrid>

			<div class="items-center clear">
				<span>🌼 请联系客服QQ ：{{ config.qq }} 购买卡密并在下面进行核销</span>
			</div>
			<div class="flex items-center space-x-4">
				<div class="flex-1">
					<NInput ref="cardNoRef" v-model:value="cardNo" placeholder="卡密"/>
				</div>
				<NButton type="success" :disabled="buttonDisabled" @click="handleSubmit">
					核销
				</NButton>
			</div>
    </div>
  </NSpin>
</template>
