<template>
  <!-- 程式程式碼區塊 -->
  <highlightjs language="json"
                :code="JSON.stringify(code, null, 2)" />
</template>

<script setup>
import { toRefs, defineProps } from 'vue'

const props = defineProps(['code'])
const { code } = toRefs(props)
</script>

<style lang='scss' scope></style>
