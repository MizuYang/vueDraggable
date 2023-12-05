<template>
  <div class="row pt-5">
    <div class="col-3">
      <h3 class="text-20 mb-5">
        data1
        <button type="button"
                class="btn btn-sm btn-secondary"
                @click="addItem(data1)">新增</button>
      </h3>
      <Draggable
        class="list-group"
        :list="data1"
        group="people"
        @change="handleChange"
        itemKey="name"
        filter=".disabledItem"
      >
        <template #item="{ element, index }">
          <div class="list-group-item"
               :class="[hasItemsData1?'cursor-move':'cursor-not-allowed',
                        element.className]">
            {{ index+1 }}. {{ element.name }}
          </div>
        </template>
      </Draggable>
    </div>

    <div class="col-3">
      <h3 class="text-20 mb-5">
        data2
        <button type="button"
                class="btn btn-sm btn-secondary"
                @click="addItem(data2)">新增</button>
      </h3>
      <Draggable
        class="list-group"
        :list="data2"
        group="people"
        @change="handleChange"
        itemKey="name"
        filter=".disabledItem"
      >
        <template #item="{ element, index }">
          <div class="list-group-item cursor-move"
               :class="[hasItemsData2?'cursor-move':'cursor-not-allowed',
                        element.className]">
            {{ index+1 }}. {{ element.name }}
          </div>
        </template>
      </Draggable>
    </div>

    <div class="col-3">
      <div class="px-10" style="background-color:#303030;">
        <h3 class="text-light text-20 pt-5">data1</h3>
        <!-- 程式程式碼區塊 -->
        <highlightjs language="json"
                      :code="JSON.stringify(data1, null, 2)" />
      </div>
    </div>
    <div class="col-3">
      <div class="px-10" style="background-color:#303030;">
        <h3 class="text-light text-20 pt-5">data2</h3>
        <!-- 程式程式碼區塊 -->
        <highlightjs language="json"
                      :code="JSON.stringify(data2, null, 2)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, watchEffect } from 'vue' // eslint-disable-line
import Draggable from 'vuedraggable'

const data1 = reactive([
  { name: '金獨子', id: 1 },
  { name: '劉眾赫', id: 2 },
  { name: '韓秀英', id: 3 },
  { name: '劉尚雅', id: 4 }
])
const data2 = reactive([
  { name: '李賢誠', id: 5 },
  { name: '鄭熙媛', id: 6 },
  { name: '李吉永', id: 7 }
])

// computed
const hasItemsData1 = computed(() => data1.findIndex(item => item.id === -1) === -1)
const hasItemsData2 = computed(() => data2.findIndex(item => item.id === -1) === -1)

function addItem (data) {
  const number = data1.length + data2.length
  data.push({
    name: `新成員${number + 1}號`,
    id: number
  })

  const delIdx = data.findIndex(item => item.id === -1)
  if (delIdx !== -1) data.splice(delIdx, 1)
}
function handleChange (e) {
  console.log('@change', e)
  const itemId = e?.added?.element?.id || e?.removed?.element?.id

  // 判斷是 data1 還是 data2
  if (data1.findIndex(item => item.id === itemId) !== -1) {
    // data1
    handleAdded(data1)
    handleRemoved(data2) // 此處找到的是被刪除item移動到的新data,所以要再另一個data新增(無)
  } else {
    // data2
    handleAdded(data2)
    handleRemoved(data1) // 此處找到的是被刪除item移動到的新data,所以要再另一個data新增(無)
  }

  // 新增項目時，刪除"(無)"
  function handleAdded (data) {
    if (e?.added) {
      deleteEmptyItem()

      function deleteEmptyItem () {
        const delIdx = data.findIndex(item => item.id === -1)
        if (delIdx !== -1) data.splice(delIdx, 1)
      }
    }
  }
  // 刪除項目時, 若資料空的就顯示(無) 再使用 filter=".disabledItem" 來禁止拖曳
  function handleRemoved (data) {
    if (e?.removed) {
      if (!data.length) {
        data.push({
          name: '(無)',
          id: -1,
          className: 'disabledItem'
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
