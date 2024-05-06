import type { PaginationProps } from "@pureadmin/table";
import { reactive, ref } from "vue";
const useColumns = () => {
  const options = ref([
    {
      id: 1,
      label: "可用",
      value: "available"
    },
    {
      id: 2,
      label: "禁用",
      value: "disable"
    },
    {
      id: 2,
      label: "注销",
      value: "logoff"
    }
  ]);
  const columns: TableColumnList = [
    {
      type: "selection",
      align: "left"
    },
    {
      label: "序号",
      prop: "id",
      type: "index",
      width: 80
    },
    {
      label: "用户名",
      prop: "username",
      slot: "username"
    },
    {
      label: "昵称",
      prop: "nickname"
    },
    {
      label: "邮箱",
      prop: "email"
    },
    {
      label: "状态",
      prop: "status",
      cellRenderer: ({ row }) => (
        <el-tag type={row.status === "正常" ? "primary" : "danger"}>
          {row.status}
        </el-tag>
      )
    },
    {
      label: "操作",
      prop: "operate",
      slot: "operate"
    }
  ];
  const pagination = reactive<PaginationProps>({
    currentPage: 1,
    pageSize: 10,
    total: 3
  });
  return { columns, pagination, options };
};
export default useColumns;
