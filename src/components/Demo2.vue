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
      >
        <template #item="{ element, index }">
          <div class="list-group-item cursor-move">{{ index+1 }}. {{ element.name }}</div>
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
      >
        <template #item="{ element, index }">
          <div class="list-group-item cursor-move">{{ index+1 }}. {{ element.name }}</div>
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
import { reactive } from 'vue'
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

function addItem (data) {
  const number = data1.length + data2.length
  data.push({
    name: `新成員${number + 1}號`,
    id: number
  })
}
function handleChange (evt) {
  console.log('@change', evt)
}
</script>
