<template>
  <div class="row">
    <div class="col-8">
      <h3 class="text-18 mb-10">Footer slot</h3>

      <div class="row">
        <div class="col-6">
          <TransitionGroup>
            <Draggable
              key="dragggable9"
              :componentData="componentData"
              :list="list"
              :animation="100"
              @start="dragging = true"
              @end="dragging = false"
              item-key="name"
            >
              <template #item="{ element }">
                <div class="list-group-item">
                  {{ element.name }}
                </div>
              </template>
              <template #footer>
                <div
                  class="btn-group list-group-item"
                  role="group"
                  aria-label="Basic example"
                  :key="footerKey"
                >
                  <button class="btn btn-secondary" @click="add">Add</button>
                  <button class="btn btn-secondary" @click="replace">Replace</button>
                </div>
              </template>
            </Draggable>
          </TransitionGroup>
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

let id = 1

const list = ref([
  { name: '周杰倫', id: 0 },
  { name: '林俊傑', id: 1 },
  { name: '五月天', id: 2 }
])

const dragging = ref(false)

const componentData = ref({
  type: 'transition',
  name: 'flip-list'
})

const add = () => {
  list.value.push({ name: '粉絲 ' + id, id: id++ })
}

const replace = () => {
  list.value = [{ name: '特斯拉', id: id++ }]
}

const footerKey = 'footer' // Ensure the key is reactive

</script>

<style scoped>
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}
</style>
