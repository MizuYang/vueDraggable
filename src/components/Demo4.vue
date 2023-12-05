<template>
  <div class="row">
    <div class="col-1">
      <button class="btn btn-secondary button" @click="add">Add</button>
    </div>

    <div class="col-7">
      <h3 class="text-18 mb-5">使用 icon 拖曳</h3>

      <Draggable
        tag="ul"
        :list="list"
        class="list-group"
        handle=".dragIcon"
        item-key="name"
      >
        <template #item="{ element, index }">
          <li class="list-group-item">
            <!-- 拖曳icon -->
            <span draggable class="cursor-move dragIcon"
                  style="width: 20px; height: 20px; display: inline-block;"
                  :style="[`background-image:url(${imageUrl});`,
                          'background-repeat: no-repeat;',
                          'background-size: cover;']"></span>

            <span class="text d-inline-block ms-4 my-0"
                  style="transform:translateY(-4px);">
              {{ element.name }}
            </span>

            <input type="text" class="form-control" v-model="element.text" />

            <!-- 刪除按鈕 -->
            <div class="position-absolute top-0 end-0 m-2">
              <button type="button"
                      class="btn-close"
                      aria-label="Close"
                      @click="removeAt(index)"></button>
            </div>
          </li>
        </template>
      </Draggable>
    </div>

    <rawDisplayer class="col-3" :value="list" title="List" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Draggable from 'vuedraggable'
import imageUrl from '@/assets/images/demo4/dragIcon.png'

const list = ref([
  { name: 'Mizu', text: '', id: 0 },
  { name: '金獨子', text: '', id: 1 },
  { name: '劉眾赫', text: '', id: 2 }
])
const id = ref(0)

function removeAt (idx) {
  list.value.splice(idx, 1)
}
function add () {
  id.value++
  list.value.push({ name: 'Juan ' + id.value, id, text: '' })
}

</script>

<style lang='scss' scope>
.button {
  margin-top: 35px;
}
.handle {
  float: left;
  padding-top: 8px;
  padding-bottom: 8px;
}

.close {
  float: right;
  padding-top: 8px;
  padding-bottom: 8px;
}

input {
  display: inline-block;
  width: 50%;
}

.text {
  margin: 20px;
}
</style>
