<template>
  <div style="margin:50px;">
    <!-- 切換demo按鈕 -->
    <ul class="d-flex align-items-center mb-15">
      <template v-for="btn in data" :key="btn.fileName">
        <li class="me-2">
          <button type="button"
                  class="btn"
                  :class="btn.component===curComponent
                          ? 'btn-primary'
                          : 'btn-secondary'"
                  @click="changeComponent(btn)">
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
    name: '兩個可互相拖曳的data',
    component: ''
  },
  {
    fileName: 'Demo3',
    name: '克隆',
    component: ''
  },
  {
    fileName: 'Demo4',
    name: '使用icon拖曳',
    component: ''
  },
  {
    fileName: 'Demo5',
    name: 'transition',
    component: ''
  },
  {
    fileName: 'Demo6',
    name: '表格',
    component: ''
  },
  {
    fileName: 'Demo7',
    name: '表格表頭拖曳',
    component: ''
  },
  {
    fileName: 'Demo8',
    name: '摺疊拖曳',
    component: ''
  },
  {
    fileName: 'Demo9',
    name: 'Footer slot',
    component: ''
  }
])
const curComponent = ref('')

onMounted(() => {
  getData()

  if (localStorage.component) {
    // 從localStorage取得上次使用的component
    const fileName = localStorage.component
    const component = data.find(item => item.fileName === fileName).component
    curComponent.value = component
  } else {
    // 預設顯示Demo1
    curComponent.value = data[0].component
    localStorage.setItem('component', 'Demo1')
  }

  console.log(localStorage.component)
})

function getData () {
  data.forEach(item => {
    item.component = defineAsyncComponent(() => import(`../components/${item.fileName}.vue`))
  })
}
function changeComponent ({ fileName, component }) {
  curComponent.value = component

  localStorage.setItem('component', fileName)
}
</script>

<style lang='scss' scope></style>
