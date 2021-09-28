import { Form, Input, Button, Checkbox} from "antd";
import { useState } from "react";
import { useHistory } from "react-router";
import "./index.scss";
import google_logo from "../../assets/images/google.png";
const SignupForm = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const history = useHistory();
const [checked, setChecked] = useState(false);
  const handleCheckBox = () => {
        setChecked(!checked);
  };

  const tooglePasswordVisibilty = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
        <span className="input-label">Full Name*</span>
      <Form.Item
        name="fullname"
        rules={[
          {
            required: true,
            message: "Please input name!",
          },
        ]}
      >
          
        <Input size="large"  type="text" className="login-input" placeholder="Kamikazi Lilian" />
      </Form.Item>
      
        <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input email!",
          },
        ]}
      >
            <span  className="input-label">Email*</span>
        <Input size="large"  type="email" className="login-input" placeholder="KamikaziLilian@gmail.com" />
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
          type={passwordVisible ? "text" : "password"}
          placeholder="Password"
          className="login-input"
          visible="true"
          name="password"
        />
         <i onClick={tooglePasswordVisibilty} className="eye-icon">{passwordVisible ? "hide" :"show"}</i>
      </Form.Item>
      <Form.Item>
    

      </Form.Item>

      <Form.Item style={{marginTop:"-50px"}}>
           <p style={{ marginBottom: "20px" }}>
          <Checkbox
            checked={checked}
            onChange={handleCheckBox}
          >
         I agree to terms and Conditions
          </Checkbox>
        </p>
        <Button  htmlType="submit" className="login-btn">
         Create Account
        </Button>
      </Form.Item>
         <h3 className="or-text">or</h3>

         <Form.Item className="google-signup">
             <button  className="google-signup-btn">
         <img src={google_logo}/>Signup with google
        </button>
         </Form.Item>
      <Form.Item className="text-center blue-txt">
         Already Have An Account? <span style={{   color: "blue"}} onClick={() => {history.push("/login");}} >Login</span>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;