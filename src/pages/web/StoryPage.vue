<script setup>
import MenuWeb from '@/components/web/MenuWeb.vue'
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',

    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',

    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',

    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',

    zip: 'CA 90036',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',

    zip: 'CA 90036',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',

    zip: 'CA 90036',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',

    zip: 'CA 90036',
  },
]
</script>

<template>
  <menu-web></menu-web>
  <div class="container">
    <div class="mx-16">
      <h3>点赞榜</h3>

      <el-table :data="tableData" style="width: 100%" height="550">
        <el-table-column fixed prop="date" label="Date" width="150" />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="state" label="State" width="120" />
        <el-table-column prop="city" label="City" width="120" />
        <el-table-column prop="zip" label="Zip" width="120" />
      </el-table>
    </div>
    <div class="mx-16">
      <h3>浏览榜</h3>
      <el-table :data="tableData" style="width: 100%" height="550">
        <el-table-column fixed prop="date" label="Date" width="150" />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="state" label="State" width="120" />
        <el-table-column prop="city" label="City" width="120" />
        <el-table-column prop="zip" label="Zip" width="120" />
      </el-table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
}
</style>
