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

        <Draggable ref="draggableRef"
                   class="list-group"
                   item-key="id"
                   :list="data"
                   :disabled="!enabled"
                   chosen-class="active"
                   animation="500"
                   @start="startDrag"
                   @end="endDrag">
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
import { ref, reactive, computed, onMounted } from 'vue'
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
const dataObject = reactive({
  key1: 'value1',
  key2: 'value2'
})
const jsonData = computed(() => { // eslint-disable-line
  // 將物件轉換為 JSON 字串
  return JSON.stringify(dataObject, null, 2)
})

onMounted(() => {
  // console.log(draggableRef.value)
})

function startDrag (e) { // eslint-disable-line
  console.log('startDrag', e)
  dragging.value = true
}
function endDrag (e) { // eslint-disable-line
  console.log('endDrag', e)
  dragging.value = false
}

// function checkMove (evt) { // eslint-disable-line
//   console.log(evt)
//   return (evt.draggedContext.element.name !== 'apple')
// }
// function onUpdate (updatedData) { // eslint-disable-line
//   console.log('Updated Data:', updatedData)
//   console.log(data)
// }
// function setTargetStyle (target) {
//   console.log(target)
// }

</script>

<style lang='scss' scope></style>
