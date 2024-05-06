<script setup lang='ts'>
import { defineComponent, ref } from "vue";
defineComponent({
  name: "ReDrawer"
})
// const props = defineProps({
//   visible: {
//     type: Boolean,
//     default: false
//   }
// })

const visible = ref(false);
defineExpose({
  visibleClick() {
    visible.value = !visible.value
  }
})



</script>

<template>
  <el-drawer v-model="visible" :with-header="false" size="'20%'">
    <el-descriptions class="mt-5" :column="2" border>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            头像
          </div>
        </template>
        kooriookami
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            用户名
          </div>
        </template>
        kooriookami
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            昵称
          </div>
        </template>
        子十
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            性别
          </div>
        </template>
        Suzhou
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            年龄
          </div>
        </template>
        School
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            电话
          </div>
        </template>
        School
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            邮箱
          </div>
        </template>
        School
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            角色
          </div>
        </template>
        School
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <div class="cell-item">
            地址
          </div>
        </template>
        No.1188, Wuzhong Avenue
      </el-descriptions-item>
    </el-descriptions>
  </el-drawer>
</template>

<style lang='scss' scoped>
.cell-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>