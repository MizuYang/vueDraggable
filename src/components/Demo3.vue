<template>
  <div class="row mb-10">
    <!-- 克隆軍團1 -->
    <div class="col-3">
      <h3 class="text-18 mb-4">克隆軍營 1</h3>
      <Draggable
        class="dragArea list-group"
        :list="list1"
        :group="{ name: 'people', pull: configList1.pull, put: configList1.put }"
        @change="log"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            {{ element.name }}
          </div>
        </template>
      </Draggable>

      <!-- 配置選項 -->
      <div class="mt-15">
        <!-- pull -->
        <div class="mb-15">
          <h3 class="text-18 my-5">pull 配置</h3>
          <div class='form-check d-flex align-items-center'>
            <input class='form-check-input'
                   type='radio'
                   name='configPullList1'
                   id='pullClone1'
                   v-model="configList1.pull"
                   value="clone">
            <label class='form-check-label ms-3'
                   for='pullClone1'>
              clone (克隆)
            </label>
          </div>
          <div class='form-check d-flex align-items-center'>
            <input class='form-check-input'
                   type='radio'
                   name='configPullList1'
                   id='pullTrue1'
                   v-model="configList1.pull"
                   :value="true">
            <label class='form-check-label ms-3'
                   for='pullTrue1'>
              true (可拖曳)
            </label>
          </div>
          <div class='form-check d-flex align-items-center'>
            <input class='form-check-input'
                   type='radio'
                   name='configPullList1'
                   id='pullFalse'
                   v-model="configList1.pull"
                   :value="false">
            <label class='form-check-label ms-3'
                   for='pullFalse'>
              false (不可拖到其他群組)
            </label>
          </div>
        </div>

        <!-- put -->
        <div>
          <h3 class="text-18 my-5">put 配置</h3>
          <!-- <div class='form-check d-flex align-items-center'>
            <input class='form-check-input'
                   type='radio'
                   name='configPutList1'
                   id='putClone1'
                   v-model="configList1.put"
                   value="clone">
            <label class='form-check-label ms-3'
                   for='putClone1'>
              clone (克隆)
            </label>
          </div> -->
          <div class='form-check d-flex align-items-center'>
            <input class='form-check-input'
                   type='radio'
                   name='configPutList1'
                   id='putTrue1'
                   v-model="configList1.put"
                   :value="true">
            <label class='form-check-label ms-3'
                   for='putTrue1'>
              true (可被任何群組拖曳進來)
            </label>
          </div>
          <div class='form-check d-flex align-items-center'>
            <input class='form-check-input'
                   type='radio'
                   name='configPutList1'
                   id='putFalse'
                   v-model="configList1.put"
                   :value="false">
            <label class='form-check-label ms-3'
                   for='putFalse'>
              false (不可被拖曳進來)
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- 克隆軍團2 -->
    <div class="col-3">
      <h3 class="text-18 mb-4">克隆軍營 2</h3>
      <Draggable
        class="dragArea list-group"
        :list="list2"
        group="people"
        @change="log"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            {{ element.name }}
          </div>
        </template>
      </Draggable>
    </div>

    <!-- 機器人墳場 -->
    <div class="col-3">
      <h3 class="text-18 mb-4">機器人墳場 (須開放才可被拖曳)</h3>
      <Draggable
        class="dragArea list-group"
        :list="list3"
        :group="{ name: 'break', pull: false, put: configList3.put }"
        @change="handleList3Change"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item cursor-not-allowed">
            ⛔ {{ element.name }} ⛔
          </div>
        </template>
      </Draggable>

      <!-- 配置選項 -->
      <div class="mt-15">
        <!-- pull -->
        <div>
          <h3 class="text-18 my-5">pull 配置</h3>
          <div class='form-check d-flex align-items-center'>
            <input class='form-check-input'
                   type='radio'
                   name='configPullList2'
                   id='pullClone2'
                   v-model="configList3.put"
                   value="people">
            <label class='form-check-label ms-3'
                   for='pullClone2'>
              開放被拖曳進來
            </label>
          </div>
          <div class='form-check align-items-stretch'>
            <input class='form-check-input'
                   type='radio'
                   name='configPullList2'
                   id='pullTrue2'
                   v-model="configList3.put"
                   :value="false">
            <label class='form-check-label'
                   for='pullTrue2'>
              關閉拖曳
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-3"><Code :code="list1" /></div>
    <div class="col-3"><Code :code="list2" /></div>
    <div class="col-3"><Code :code="list3" /></div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Draggable from 'vuedraggable'
import Code from '@/components/Code.vue'

const list1 = reactive([
  { name: '克隆人 1 號', id: 1 },
  { name: '克隆人 2 號', id: 2 },
  { name: '克隆人 3 號', id: 3 },
  { name: '克隆人 4 號', id: 4 }
])
const list2 = reactive([
  { name: '克隆人 5 號', id: 5 },
  { name: '克隆人 6 號', id: 6 },
  { name: '克隆人 7 號', id: 7 }
])
const list3 = reactive([
  { name: '報廢的未知機器人', id: 8 },
  { name: '報廢的未知機器人', id: 9 },
  { name: '報廢的未知機器人', id: 10 }
])
const configList1 = reactive({
  pull: 'clone',
  // put: ['break', 'people']
  // put: 'break'
  put: false
})
const configList3 = reactive({
  put: 'people'
  // put: false
})

function log (evt) {
  window.console.log(evt)
}
function handleList3Change ({ added }) {
  if (added?.element?.id) {
    const itemId = added?.element?.id
    const itemName = added?.element.name
    const length = itemId + list1.length + list2.length + list3.length + 3

    const idx = list3.findIndex(item => item.id === itemId)
    list3[idx].name = `報廢的${itemName}`
    list3[idx].id = length
  }
}

</script>

<style lang='scss' scope></style>
