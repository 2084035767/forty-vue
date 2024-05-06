import { ref } from "vue";
// import { http } from "@/utils/http";、
// type Result = {
//   code: number;
//   msg: string;
//   data: Array<any>;
// };
let tableData = ref<Array<any>>([
  {
    id: 1,
    username: "Tom",
    nickname: "Tom",
    email: "Tom@qq.com",
    status: "正常"
  },
  {
    id: 2,
    username: "Tom",
    nickname: "Tom",
    email: "Tom@qq.com",
    status: "正常"
  },
  {
    id: 3,
    username: "Tom",
    nickname: "Tom",
    email: "Tom@qq.com",
    status: "正常"
  },
  {
    id: 4,
    username: "Tom",
    nickname: "Tom",
    email: "Tom@qq.com",
    status: "正常"
  },
  {
    id: 5,
    username: "Tom",
    nickname: "Tom",
    email: "Tom@qq.com",
    status: "正常"
  }
]);
// const getTableData = (data?: Array<any>) => {
//   return http.request<Result>("get", "/user/info", { data });
// };


export default tableData;
