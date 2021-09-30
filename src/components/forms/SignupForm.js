import { Form, Input, Button, Checkbox} from "antd";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./index.scss";
import google_logo from "../../assets/images/google.png";
import { auth, provider } from "../../helpers/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { signupRequest, signupWithGoogleRequest } from "../../redux/actions/auth";
import { Spin , Alert} from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const SignupForm = () => {

    const dispatch = useDispatch();
    const [passwordVisible, setPasswordVisible] = useState(false);
  const onFinish = (values) => {
     dispatch(signupRequest(values));
  };
 const antIcon = <LoadingOutlined style={{ fontSize: 22 }} spin />;
  const history = useHistory();
const [checked, setChecked] = useState(false);
  const handleCheckBox = () => {
        setChecked(!checked);
  };

  const tooglePasswordVisibilty = () => {
    setPasswordVisible(!passwordVisible);
  };


  const SignIn = () => {
    auth.signInWithPopup(provider).then((payload) =>{
      console.log(payload);
      localStorage.setItem("token",payload.credential.idToken);
      dispatch(signupWithGoogleRequest(payload.credential));}).catch((error) => console.log(error));
  };


const signupStatus = useSelector(state => state.SignupReducer.signupStatus);
const isLoading = useSelector(state => state.SignupReducer.isLoading);
const errors = useSelector(state => state.SignupReducer.errors);

useEffect(() => {
    signupStatus === 201 ? history.push("/login") : null;
},[signupStatus]);
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
        name="fullName"
        rules={[
          {
            required: true,
            message: "Please input name!",
          },
        ]}
      >
          
        <Input size="large"  type="text" className="login-input" placeholder="Kamikazi Lilian" />
      </Form.Item>
       <span  className="input-label">Email*</span>
        <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input email!",
          },
        ]}
      >
           
        <Input size="large" name="email"  type="email" className="login-input" placeholder="KamikaziLilian@gmail.com" />
      </Form.Item>
      
         <span className="input-label">Password*</span>

    <i onClick={tooglePasswordVisibilty} style={{display:"none"}} className="eye-icon">{passwordVisible ? "hide" :"show"}</i>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input password!",
          },
        ]}
      >
          
        <Input    type={passwordVisible ? "text" : "password"}
          placeholder="Password"
          className="login-input" 
          visible="true"
          name="password" size="large" />
        </Form.Item>

      <Form.Item>
       

      </Form.Item>

      <Form.Item style={{marginTop:"-50px"}}
      //  name="agree"
      //   rules={[
      //     {
      //       required: true,
      //       message: "Agree to terms and conditions",
      //     },
      //   ]}
      >
           <p style={{ marginBottom: "20px" }}>
          <Checkbox
            checked={checked}
            onChange={handleCheckBox}
          >
         I agree to terms and Conditions
          </Checkbox>
        </p>
        <Button disabled={isLoading}  htmlType="submit" className="login-btn">      
          {isLoading ? <Spin indicator={antIcon} />: "Create Account"}
        </Button>
      </Form.Item>
         <h3 className="or-text">or</h3>

         <Form.Item className="google-signup">
             <button  className="google-signup-btn" onClick={SignIn}>
         <img src={google_logo}/>Signup with google
        </button>
         </Form.Item>
            {errors.length ? <>  <Alert message={errors.map((error) => errors.length  < 2 ? error : error + ", ")} type="error" className="error-msg" showIcon /> </> : null}
      <Form.Item className="text-center blue-txt">
         Already Have An Account? <span style={{   color: "blue"}} onClick={() => {history.push("/login");}} >Login</span>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;