<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
// 登录页面跳转
const router = useRouter()
const toLogin = () => {
  router.push({ path: '/login' })
}

const form = reactive({
  name: '',
  password: '',
})

const rules = reactive({
  username: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  password: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
})
</script>

<template>
  <div class="page">
    <div
      class="main"
      drop-shadow-lg
    >
      <div
        class="left"
        bg="blue-100"
      >
        <img
          src="@/assets/img/resign.svg"
          alt="登录"
          srcset=""
        />
      </div>
      <div
        class="right"
        bg="blue-50"
      >
        <h2>注册</h2>
        <el-form
          :model="form"
          label-width="120px"
        >
          <el-form-item label="Activity name">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="Activity name">
            <el-input v-model="form.password" />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit"
              >Create</el-button
            >
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  height: 600px;
  width: 900px;
  display: flex;
  margin-top: 50px;
  border-radius: 16px;
  background-color: #723636;
  .left {
    width: 460px;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .right {
    width: 440px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .el-form {
      margin-right: 90px;
    }
  }
}
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
