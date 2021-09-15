import LoginForm from "../../components/forms/LoginForm";
import AuthLayout from "../../components/layouts/AuthLayout";
import "./index.scss";

const Login = () => {
return ( 
    
    <AuthLayout>
 <div className="login-form"> <div className="login-header">
            <h1>Log In</h1>
            <br/>
            <p>We’re glad you are back! Now fill in the details And dive in</p>
            <br/>
        </div>
          <LoginForm/>
        </div>
    </AuthLayout>
   
        );
};
export default Login;