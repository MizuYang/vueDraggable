<template>
  <div class="row">
    <div class="col-3">
      <h3 class="text-18 mb-10">Footer slot 拖曳區塊</h3>

      <draggable
        id="first"
        data-source="juju"
        :list="list"
        class="list-group"
        group="a"
        item-key="name"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            {{ element.name }}
          </div>
        </template>

        <template #footer>
          <div class="btn-group list-group-item" role="group">
            <button class="btn btn-secondary" @click="add">Add</button>
            <button class="btn btn-secondary" @click="replace">Replace</button>
          </div>
        </template>
      </draggable>
    </div>

    <div class="col-3">
      <h3 class="text-18 mb-10">Header slot 拖曳區塊</h3>

      <Draggable :list="list2" class="list-group" group="a" item-key="name">
        <template #item="{ element }">
          <div class="list-group-item item">
            {{ element.name }}
          </div>
        </template>

        <template #header>
          <div
            class="btn-group list-group-item"
            role="group"
            aria-label="Basic example"
          >
            <button class="btn btn-secondary" @click="add2">Add</button>
            <button class="btn btn-secondary" @click="replace2">Replace</button>
          </div>
        </template>
      </Draggable>

    </div>
    <div class="col-3"><Code :code="list" /></div>
    <div class="col-3"><Code :code="list2" /></div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import Draggable from 'vuedraggable'
import Code from '@/components/Code.vue'

const id = ref(1)

const list = ref([
  { name: '金獨子 1', id: 0 },
  { name: '劉眾赫 2', id: 1 },
  { name: '韓秀英 3', id: 2 }
])

const list2 = ref([
  { name: '劉尚雅 4', id: 3 },
  { name: '李賢誠 5', id: 4 }
])

const add = () => {
  list.value.push({ name: `未知人物 ${id.value}`, id: id.value++ })
}

const replace = () => {
  list.value = [{ name: '特斯拉本人', id: id.value++ }]
}

const add2 = () => {
  list2.value.push({ name: `未知人物 ${id.value}`, id: id.value++ })
}

const replace2 = () => {
  list2.value = [{ name: '特斯拉本人', id: id.value++ }]
}
</script>

<style scoped></style>
