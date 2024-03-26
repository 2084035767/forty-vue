<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

// todo: 1.路由切换 2.关闭标签 3.删除标签
const editableTabsValue = ref('1')
const editableTabs = ref([
  {
    title: '首页',
    name: 'home',
  },
])

const handleSwitchRoute = (tabsPaneContext) => {
  let tabPaneName = tabsPaneContext.paneName
  //处理一个特殊情况，首页的index 为 '' ，这里取得值为0
  if (tabPaneName == 0) {
    tabPaneName = ''
  }
  router.push('/' + tabPaneName)
}

const closeTab = (item) => {
  if (item.index == 'home') {
    return false
  }
  return true
}

//(1)移除标签，（2）返回前一个路由
//删除: 需要当前索引 ，设置路由，上一个对象的index
const removeTab = (tabPaneName) => {
  let tempArr = editableTabs.value
  let eleIndex = editableTabs.findIndex((item) => {
    return item.index == tabPaneName
  })
  //上一个路由的index
  let routeIndex
  for (let p in tempArr) {
    if (tempArr[p].index == tabPaneName) {
      routeIndex = tempArr[p - 1].index
    }
  }
  //高亮和退到前一个路由
  router.push('/' + routeIndex)
  //删除当前关闭的路由标签
  editableTabs.splice(eleIndex, 1)
}
</script>

<template>
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    class="demo-tabs"
    closable
    @tab-remove="removeTab"
    @tab-click="seitchTab"
  >
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
      :closable="closeTab(item)"
    >
      <template> </template>
    </el-tab-pane>
  </el-tabs>
</template>

<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
