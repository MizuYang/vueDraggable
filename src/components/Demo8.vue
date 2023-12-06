<template>
  <div class="row">
    <div class="col-7">
      <h3 class="text-18 mb-10">
        拖曳
        <a
          href="https://element-plus.org/#/en-US/component/collapse"
          target="_blank"
          >Element+ 的折疊元件</a>
      </h3>

    </div>
    <div class="row">
      <div class="col-6">
        <Draggable
          tag="el-collapse"
          :list="list"
          :component-data="collapseComponentData"
          item-key="id"
        >
          <!-- Element-plus UI框架的折疊元件 -->
          <template #item="{ element }">
            <el-collapse-item :title="element.title" :name="element.id">
              <div v-for="(lign, idx) in element.text" :key="idx">{{ lign }}</div>
            </el-collapse-item>
          </template>
        </Draggable>
      </div>
      <div div class="col-4">
        <h4 class="text-18 mb-3">Data</h4>
        <Code :code="list" />
      </div>
      <div div class="col-2">
        <h4 class="text-18 mb-3">已展開摺疊(id)</h4>
        <Code :code="activeNames" />
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import Draggable from 'vuedraggable'
import Code from '@/components/Code.vue'

const activeNames = ref([1])
const list = ref([
  {
    title: 'Consistency',
    id: 1,
    text: [
      'Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;',
      'Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.'
    ]
  },
  {
    title: 'Feedback',
    id: 2,
    text: [
      'Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;',
      'Visual feedback: reflect current state by updating or rearranging elements of the page.'
    ]
  },
  {
    title: 'Efficiency',
    id: 3,
    text: [
      'Simplify the process: keep operating process simple and intuitive;',
      'Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;',
      'Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.'
    ]
  },
  {
    title: 'Controllability',
    id: 4,
    text: [
      'Decision making: giving advices about operations is acceptable, but do not make decisions for the users;',
      'Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.'
    ]
  }
])
const collapseComponentData = {
  'onUpdate:modelValue': inputChanged,
  modelValue: activeNames.value
}

function inputChanged (val) {
  activeNames.value = val
}
</script>

<style scoped></style>
