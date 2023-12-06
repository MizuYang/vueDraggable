<template>
  <div class="row">
    <div class="col-8">
      <h3 class="text-18 mb-10">Header slot</h3>

      <div class="row">
        <div class="col-6">
          <Draggable
            :list="list"
            class="list-group"
            :animation="100"
            @start="dragging = true"
            @end="dragging = false"
            @change="log"
            item-key="name"
          >
            <template #header>
              <div class="btn-group list-group-item" role="group">
                <button class="btn btn-secondary" @click="add">Add</button>
              </div>
            </template>
            <template #footer>
              <div class="btn-group list-group-item" role="group">
                <button class="btn btn-secondary" @click="replace">Replace</button>
              </div>
            </template>
            <template #item="{ element }">
              <div class="list-group-item item">
                {{ element.name }}
              </div>
            </template>
          </Draggable>
        </div>
        <div class="col-6"><Code :code="list" /></div>
      </div>
    </div>

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

const dragging = ref(false)

const add = () => {
  list.value.push({ name: `未知人物 ${id.value}`, id: id.value++ })
}

const replace = () => {
  list.value = [{ name: '特斯拉又來了', id: id.value++ }]
}

const log = (evt) => {
  console.log(evt)
}
</script>

<style scoped></style>
