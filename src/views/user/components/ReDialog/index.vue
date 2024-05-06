<script setup lang='ts'>
import { defineComponent, ref } from "vue";
defineComponent({
  name: "ReDialog"
})
defineProps({
  form: {
    type: Object,
    require: true
  }
})
const dialogVisible = ref(false)
defineExpose({
  dialogClick() {
    dialogVisible.value = !dialogVisible.value
  }
})

const options = [
  {
    value: 0,
    label: "超级管理员",
  },
  {
    value: 1,
    label: "管理员",
  },
  {
    value: 2,
    label: "普通用户",
  },
  {
    value: 3,
    label: "游客",
  }
]
</script>

<template>
  <el-dialog v-model="dialogVisible" width="500" align-center>
    <template #header>
      <h3>修改数据</h3>
      <el-divider />
    </template>
    <el-form :model="form" class="mx-auto" label-position="left" label-width="auto" style="max-width: 400px">
      <el-form-item label="用户名">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="form.nickname" />
      </el-form-item>
      <el-form-item label="角色">
        <el-select-v2 v-model="form.role" :options placeholder="角色" multiple />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="form.age" />
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.sex">
          <el-radio value="man">男</el-radio>
          <el-radio value="woman">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="form.address" type="textarea" />
      </el-form-item>
      <el-form-item label="状态">
        <el-switch v-model="form.status" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang='scss' scoped></style>
