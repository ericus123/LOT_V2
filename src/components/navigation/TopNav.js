import { Header } from "antd/lib/layout/layout";
// import image from "../../assets/images/avatar.png";

const TopNav = () => {
    return (
    <Header className="header top-nav" >
        {/* <div>
        <div >
   <img src={image} /> */}
   {/* <div>
      <h3>Dr Simmons M.</h3><h6>Admin</h6></div>
      </div> */}
      <h1 className="topnav-title">Overview</h1>
      {/* </div>
      </div> */}
    </Header>
    );
};

export default TopNav;