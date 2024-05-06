import { reactive, ref } from "vue";
const useHandle = () => {
  const value = ref("");
  const input = ref("");
  const dialog = ref(null);
  const dialogClick = () => {
    dialog.value.dialogClick();
  };
  const drawer = ref(null);
  const visibleClick = () => {
    drawer.value.visibleClick();
  };
  const form = reactive({
    username: "",
    nickname: "",
    email: "",
    phone: "",
    age: 0,
    sex: false,
    role: [],
    address: "",
    status: 0
  });
  return { value, input, dialog, dialogClick, drawer, visibleClick, form };
};
export default useHandle;
