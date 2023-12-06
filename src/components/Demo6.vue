<template>
  <div class="row">
    <div class="col-8">
      <h3 class="text-18 mb-10">表格拖曳</h3>

      <div class="row">
        <div class="col-7">
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Sport</th>
              </tr>
            </thead>
            <TransitionGroup>
              <Draggable v-model="list"
                         tag="tbody"
                         item-key="name"
                         key="dragggable3"
                         animation="200"
                         >
                <template #item="{ element }">
                  <tr>
                    <td scope="row">{{ element.id }}</td>
                    <td>{{ element.name }}</td>
                    <td>{{ element.sport }}</td>
                  </tr>
                </template>
              </Draggable>
            </TransitionGroup>
          </table>
        </div>
        <div class="col-5"><Code :code="list" /></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Draggable from 'vuedraggable'
import Code from '@/components/Code.vue'

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
