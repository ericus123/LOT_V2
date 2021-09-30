import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
const { confirm } = Modal;

export const showDeleteConfirm = (msg) => {

return  confirm({
    title: msg,
    icon: <ExclamationCircleOutlined />,
    content: "",
    okText: <p onClick={() => console.log("Yes clicked")}>Yes</p>,
    okType: "danger",
    cancelText: "No",
  });
};