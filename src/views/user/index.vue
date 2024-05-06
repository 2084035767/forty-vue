<script setup lang="ts">
import ReCol from "@/components/ReCol";
import ReRow from "@/components/ReRow/index.vue";
import RefreshRight from "@iconify-icons/ep/refresh-right";
import Search from "@iconify-icons/ep/search";
import ReDialog from "./components/ReDialog/index.vue";
import ReDrawer from "./components/ReDrawer/index.vue";
import tableData from "./data";
import useColumns from "./hook/columns";
import useHandle from "./hook/handle";
const { value, input, dialog, dialogClick, drawer, visibleClick, form } = useHandle();
const { columns, pagination, options } = useColumns();


</script>

<template>
  <div>
    <div>
      <re-row>
        <re-col :value="24" :xs="24">
          <el-card class="bar-card" shadow="never">
            <h2 class="mb-5">用户管理</h2>
            <div class="flex mb-5">

              <div class="flex">
                <el-input class="mr-2" v-model="input" placeholder="请输入" />
                <el-select v-model="value" placeholder="状态" class="mr-2">
                  <el-option v-for="item in options" :key="item.id" :label="item.label" :value="item.value" />
                </el-select>
              </div>
              <div class="flex">
                <el-button type="primary">
                  <IconifyIconOffline :icon="Search" class="mr-1" />
                  搜索
                </el-button>
                <el-button>
                  <IconifyIconOffline :icon="RefreshRight" class="mr-1" />
                  重置
                </el-button>
              </div>

            </div>
            <div>
              <el-button plain type="primary">新增</el-button>
              <el-button plain type="warning">修改</el-button>
              <el-button plain type="danger">删除</el-button>
              <el-button plain type="primary">导出</el-button>
            </div>
          </el-card>
        </re-col>
      </re-row>
      <re-row>
        <re-col :value="24" :xs="24">

          <el-card class="bar-card" shadow="never">
            <pure-table :data="tableData" :columns="columns" :pagination="pagination">
              <template #username="{ row }">
                <el-button link type="primary" @Click="visibleClick">
                  {{ row.username }}
                </el-button>
              </template>
              <template #operate="{ index, row }">
                <div>
                  <el-button link type="primary" @click="dialogClick">
                    <IconifyIconOffline icon={Edit} class="mr-1" />
                    修改
                  </el-button>

                  <el-popconfirm title="确认删除？" confirm-button-text="确认" cancel-button-text="取消"
                                 @confirm="tableData.splice(index, 1)">
                    <template #reference>
                      <el-button link type="danger">
                        <IconifyIconOffline icon={Delete} class="mr-1" />
                        删除
                      </el-button>
                    </template>
                  </el-popconfirm>
                </div>
              </template>
            </pure-table>
          </el-card>
        </re-col>
      </re-row>
    </div>
    <re-drawer ref="drawer" />
    <re-dialog ref="dialog" :form />
  </div>


</template>

<style lang="scss" scoped>
.bar-card {
  border-radius: 8px;
}
</style>