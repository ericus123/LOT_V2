import { Alert } from "antd";

const SimpleAlert = ({description}) => {
    
return (
     <Alert
      message="Error"
      description={description}
      type="error"
      showIcon
    />
);
};

export default SimpleAlert;