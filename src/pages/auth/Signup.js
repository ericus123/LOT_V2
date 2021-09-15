import SignupForm from "../../components/forms/SignupForm";
import AuthLayout from "../../components/layouts/AuthLayout";
import "./index.scss";

const Signup = () => {
return ( 
    
    <AuthLayout>
 <div className="login-form"> <div className="login-header">
            <h1>Create Account</h1>
    
            <p>We’re glad you are here! Now fill in the details to get started</p>
  
        </div>
          <SignupForm/>
        </div>
    </AuthLayout>
   
        );
};
export default Signup;