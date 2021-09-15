import { Form, Input, Button} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { loginRequest } from "../../redux/actions/auth";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";


const LoginForm = () => {

  let isLoading = useSelector(state => state.AuthReducer.isLoading);
  const antIcon = <LoadingOutlined style={{ fontSize: 22 }} spin />;
  const dispatch = useDispatch();
  const onFinish = (values) => {
    const {email,password} = values;
dispatch(loginRequest(email,password));
  };
  const history = useHistory();

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
        <span className="input-label">Email*</span>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input email!",
          },
        ]}
      >
          
        <Input disabled={isLoading} size="large"  type="email" className="login-input" placeholder="Email" />
      </Form.Item>
         <span className="input-label">Password*</span>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
        size="large"
          type="password"
          placeholder="Password"
          className="login-input"
           disabled={isLoading} 
        />
      </Form.Item>
      <Form.Item>
    

      </Form.Item>

      <Form.Item>
        <Button  htmlType="submit" className="login-btn">
         {isLoading ? <Spin indicator={antIcon} />: "Login"}
        </Button>
      </Form.Item>

      <Form.Item className="text-center blue-txt">
          Don’t Have An Account? <span style={{   color: "blue"}} onClick={() =>history.push("/signup")} >Signup</span>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;