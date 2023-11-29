<template>
  <div style="margin:50px;">
    <!-- 切換demo按鈕 -->
    <ul class="d-flex align-items-center">
      <template v-for="btn in data" :key="btn.fileName">
        <li>
          <button type="button"
                  class="btn"
                  :class="btn.component===curComponent
                          ? 'btn-primary'
                          : 'btn-secondary'"
                  @click="curComponent=btn.component">
            {{ btn.name }}
          </button>
        </li>
      </template>
    </ul>
    <!-- demo區塊 -->
    <component :is="curComponent"></component>
  </div>
</template>

<script setup>
import { ref, reactive, defineAsyncComponent, onMounted } from 'vue'

// data
const data = reactive([
  {
    fileName: 'Demo1',
    name: '上下拖曳(基本使用)',
    component: ''
  },
  {
    fileName: 'Demo2',
    name: 'Demo2',
    component: ''
  }
])
const curComponent = ref('')

onMounted(() => {
  getData()
  // 預設顯示Demo1
  curComponent.value = data[0].component
})

function getData () {
  data.forEach(item => {
    item.component = defineAsyncComponent(() => import(`../components/${item.fileName}.vue`))
  })
}
</script>

<style lang='scss' scope></style>
