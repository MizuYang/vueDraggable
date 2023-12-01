<template>
  <section class="bg-gainsboro mb-6 p-5 pb-15">
    <h2 class="text-20 mb-3">上下拖曳(基本使用)</h2>

    <div class="d-flex justify-content-evenly align-items-center">
      <div class="position-relative">
        <!-- 拖曳功能開關 switch -->
        <div class='position-absolute form-check form-switch'
             style="width:200px;z-index:99999;transform: translateY(-45px);">
          <input class='form-check-input'
                 v-model="enabled"
                 type='checkbox'
                 id='demo1-enabled'>
          <label class='form-check-label ms-4'
                 for='demo1-enabled'>
            {{ enabled?'開啟':'關閉' }} 拖曳功能
          </label>
        </div>

        <!-- 拖曳元件 -->
        <Draggable ref="draggableRef"
                   class="list-group"
                   item-key="id"
                   :list="data"
                   :disabled="!enabled"
                   chosen-class="active"
                   animation="500"
                   @start="handleStart"
                   @end="handleEnd"
                   @update="handleUpdate"
                   @choose="handleChoose"
                   @unchoose="handleUnchoose"
                   @sort="handleSort"
                   @move="handleMove">
          <template #item="{element}">
            <div class="list-group-item user-select-none"
                 :class="enabled?'cursor-move':'cursor-default'"
                 style="padding: 10px 30px;">
              {{ element.id+1 }}. {{ element.name }}
            </div>
          </template>
        </Draggable>
      </div>

      <div class="px-10" style="background-color:#303030;">
        <!-- 程式程式碼區塊 -->
        <highlightjs language="json"
                     :code="JSON.stringify(data, null, 2)" />

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import Draggable from 'vuedraggable'

// data
const data = reactive([
  {
    name: '金獨子',
    id: 0
  },
  {
    name: '劉眾赫',
    id: 1
  },
  {
    name: '韓秀英',
    id: 2
  },
  {
    name: '劉尚雅',
    id: 3
  },
  {
    name: '李賢誠',
    id: 4
  },
  {
    name: '鄭熙媛',
    id: 5
  },
  {
    name: '李吉永',
    id: 6
  }
])
const enabled = ref(true) // 是否啟用
const dragging = ref(false) // 是否正在拖曳
// const draggableRef = ref(null)

onMounted(() => {
  // console.log(draggableRef.value)
})

function handleStart (e) {
  console.log('start事件(開始拖曳)', e)
  dragging.value = true
}
function handleEnd (e) {
  console.log('end事件(拖曳結束)', e)
  dragging.value = false
}
function handleUpdate (e) {
  console.log('update事件(在拖曳結束後觸發，提供了整個列表的新順序)', e)
}
function handleChoose (e) {
  console.log('choose事件 (選擇了某個項目)', e)
}
function handleUnchoose (e) {
  console.log('handleUnchoose事件 (取消選擇了某個項目)', e)
}
function handleSort (e) {
  console.log('handleSort事件 (排序改變了)', e)
}
function handleMove (e) {
  console.log('handleMove事件 (每移動一次排序就會觸發[回傳拖曳對象])', e)
}

</script>

<style lang='scss' scope></style>
