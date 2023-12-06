<template>
  <div class="row">
    <div class="col-2">
      <button class="btn btn-secondary button" @click="sort">
        To original order
      </button>
    </div>

    <div class="col-6">
      <h3 class="text-18 mb-10">Transition</h3>
      <div class="row">
        <div class="col-6">
          <TransitionGroup>
            <Draggable
              class="list-group"
              key="dragggable2"
              :list="list"
              v-bind="dragOptions"
              item-key="id"
            >
              <template #item="{ element }">
                <li class="list-group-item">
                  {{ element.name }}
                </li>
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

const list = ref([
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

const sort = () => {
  list.value = list.value.sort((a, b) => a.id - b.id)
}

const dragOptions = {
  animation: 200,
  group: 'description',
  disabled: false,
  ghostClass: 'ghost'
}
</script>

<style>
.button {
  margin-top: 35px;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
</style>
