import { Modal} from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const PopConfirm = ({visible,handleCancel,handleComfirm, company}) => {
return (
     Modal.confirm({
    title: "Confirm",
    icon: <ExclamationCircleOutlined />,
    content: "Are you sure you want to delete" + {company},
    okText: "Yes",
    visible:visible,
    cancelText: "No",
    onOk:handleComfirm,
    onCancel:handleCancel
  })
);
 };

 export default PopConfirm;

