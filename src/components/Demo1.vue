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
                   :list="data"
                   item-key="id"
                   :disabled="!enabled"
                   chosen-class="active"
                   ghost-class="bg-danger"
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
                 :class="[enabled?'cursor-move':'cursor-default',element.className]"
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

    <div style="margin-left:100px;">
      <!-- <h3>事件觀察區</h3> -->
      <ul>
        <li class="text-20">
          拖曳中：
          <span :class="dragging?'text-success':'text-gray'">
             {{ dragging?'O':'X' }}
          </span>
        </li>
        <li class="text-20">
          目前拖曳的項目：
          <span :class="moveTarget.name||'text-gray'">
            {{ moveTarget.name||'( 無 )' }}
          </span>
        </li>
        <li class="text-20">
          被拖曳的項目：
          <span :class="currentDraggedItem.name||'text-gray'">
            {{ currentDraggedItem.name||'( 無 )' }}
          </span>
        </li>
        <li class="text-20">
          拖曳後的目標項目：
          <span :class="targetItemAfterDrag||'text-gray'">
            {{ targetItemAfterDrag||'( 無 )' }}
          </span>
        </li>
        <li class="text-20">
          位置改變(move事件)：
          <span>
            <template v-if="isMoveDemoShow">
              {{ currentDraggedItem.name }} 從第 {{ moveResult.oldIndex+1 }} 個移動到第 {{ moveResult.newIndex+1 }} 個
            </template>
            <template v-else>
              <span class="text-gray">( 無 )</span>
            </template>
          </span>
        </li>
        <li class="text-20">
          位置改變(update事件)：
          <span>
            <template v-if="isUpdateDemoShow">
              {{ currentDraggedItem.name }} 從第 {{ updateResult.oldIndex+1 }} 個移動到第 {{ updateResult.newIndex+1 }} 個
            </template>
            <template v-else>
              <span class="text-gray">( 無 )</span>
            </template>
          </span>
        </li>
      </ul>
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
const tempDate = ref([]) // 用來判斷當前交換、被交換的對象是誰
const enabled = ref(true) // 是否啟用
const dragging = ref(false) // 是否正在拖曳
const moveTarget = ref('') // 被拖曳的項目
const currentDraggedItem = ref('') // 目前拖曳的項目
const targetItemAfterDrag = ref('') // 拖曳後的目標項目
const isUpdateDemoShow = ref(false)
const isMoveDemoShow = ref(false)
const updateResult = ref({}) // update 事件結果
const moveResult = ref({
  oldIndex: '',
  newIndex: ''
}) // move 事件結果

onMounted(() => {
  // console.log(draggableRef.value)

  tempDate.value = JSON.parse(JSON.stringify(data))
})

function handleStart (e) {
  // console.log('start事件(開始拖曳)', e)
  dragging.value = true
}
function handleEnd (e) {
  // console.log('end事件(拖曳結束)', e)
  dragging.value = false
  moveTarget.value = ''
}
function handleUpdate (e) {
  // console.log('update事件(在拖曳結束後觸發，提供了整個列表的新順序)', e)

  updateResult.value = {
    newIndex: e.newIndex,
    oldIndex: e.oldIndex
  }

  // 每次交換成功都要更新tempDate, 才能用最新的tempDate來判斷當前對象、被交換的對象
  tempDate.value = JSON.parse(JSON.stringify(data))
}
function handleChoose (e) {
  // console.log('choose事件 (選擇了某個項目)', e)
  moveTarget.value = data[e.oldDraggableIndex]
  currentDraggedItem.value = data[e.oldDraggableIndex]
}
function handleUnchoose (e) {
  // console.log('handleUnchoose事件 (取消選擇了某個項目)', e)
}
function handleSort (e) {
  // console.log('handleSort事件 (排序改變了)', e)
  isUpdateDemoShow.value = true
}
function handleMove (e) {
  isMoveDemoShow.value = true
  console.log('handleMove事件 (每移動一次排序就會觸發[回傳拖曳對象])', e)
  const preIndex = e.related.__draggable_context.index
  targetItemAfterDrag.value = tempDate.value[preIndex].name

  moveResult.value.oldIndex = e.dragged.__draggable_context.index
  moveResult.value.newIndex = e.related.__draggable_context.index
}

</script>

<style lang='scss' scope></style>
