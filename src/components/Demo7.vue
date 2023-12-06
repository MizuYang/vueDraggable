<template>
  <div class="row">
    <div class="col-8">
      <h3 class="text-18 mb-10">表格的表頭拖曳</h3>

      <div class="row">
        <div class="col-6">
          <table class="table table-striped">
            <thead class="thead-dark">
              <Draggable v-model="headers" tag="tr" :item-key="key => key">
                <template #item="{ element: header }">
                  <th scope="col">{{ header }}</th>
                </template>
              </Draggable>
            </thead>
            <tbody>
              <tr v-for="item in list" :key="item.name">
                <td v-for="header in headers" :key="header">{{ item[header] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-6"><Code :code="headers" /></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Draggable from 'vuedraggable'
import Code from '@/components/Code.vue'

const headers = ref(['id', 'name', 'sport'])
const list = ref([
  { id: 1, name: 'Abby', sport: 'basket' },
  { id: 2, name: 'Brooke', sport: 'foot' },
  { id: 3, name: 'Courtenay', sport: 'volley' },
  { id: 4, name: 'David', sport: 'rugby' }
])
</script>

<style scoped>
.buttons {
  margin-top: 35px;
}
</style>
