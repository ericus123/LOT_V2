import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const AuthLayout = ({children}) => {

   let user = useSelector(state => state.LoginReducer.user);
    const history = useHistory();

    useEffect(() => {
    if(user){
        history.push("/dashboard");
    }
    },[user]);
    return (

         
    <div className="homepage">
        <div className="left-side">
            <div className="logo-wrapper">
             <svg xmlns="http://www.w3.org/2000/svg" width="377.3" height="134.596" fill="white" viewBox="0 0 377.3 134.596"><defs></defs><path className="a" d="M75.614,0H0V-134.6H16.478V-16.478H75.614Zm64.064-30.184a49.612,49.612,0,0,0,34.881,13.706,49.193,49.193,0,0,0,34.8-13.783A48.739,48.739,0,0,0,225.3-63.91H210.056V-55.9H139.062V-63.91H123.816A49.145,49.145,0,0,0,139.678-30.184Zm60.368-81.158a49.983,49.983,0,0,0-25.487-6.776,49.983,49.983,0,0,0-25.487,6.776,50.283,50.283,0,0,0-18.557,18.557A49.82,49.82,0,0,0,123.662-67.3a25.082,25.082,0,0,0,.154,2.772h15.246v-8.008h70.994v8.008h15.4V-67.3A49.82,49.82,0,0,0,218.6-92.785,50.283,50.283,0,0,0,200.046-111.342Zm-51.59-17.864a65.314,65.314,0,0,1,26.18-5.39,66.128,66.128,0,0,1,26.18,5.313A67.308,67.308,0,0,1,222.3-114.961a67.308,67.308,0,0,1,14.322,21.483,66.128,66.128,0,0,1,5.313,26.18,66.334,66.334,0,0,1-8.47,32.879,66.291,66.291,0,0,1-23.177,24.332A66.424,66.424,0,0,1,178.178,0h-7.084a66.2,66.2,0,0,1-32.186-10.087,67.127,67.127,0,0,1-23.177-24.332A65.866,65.866,0,0,1,107.184-67.3a65.315,65.315,0,0,1,5.39-26.18,68.359,68.359,0,0,1,14.4-21.483A66.281,66.281,0,0,1,148.456-129.206ZM377.3-118.118H335.874V0H319.4V-118.118h-41.58V-134.6H377.3Z" transform="translate(0 134.596)"/></svg>
            </div>
            <div className="home-txt-wrapper">
                <p className="medium_italic_txt col-white home-txt">&#34;Let the countdown begin&#34;</p>
            </div>
        </div>
        <div className="right-side"> 
       {children}    
        </div>
    </div>
    );
};
export default AuthLayout;