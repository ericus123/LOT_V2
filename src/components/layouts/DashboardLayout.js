import { SearchOutlined } from "@ant-design/icons";
import { Col, Input, Layout, Menu, Row } from "antd";
import Text from "antd/lib/typography/Text";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import AppointmentsPage from "../../pages/dashboard/appointments";
import HomePage from "../../pages/dashboard/home";
import ReportsPage from "../../pages/dashboard/reports";
import SettingsPage from "../../pages/dashboard/settings";
import StaffsPage from "../../pages/dashboard/staffs";
import { logoutRequest } from "../../redux/actions/auth";
import { icons } from "../../utils/icons";
import "./index.scss";


const { Header, Content, Sider } = Layout;

const DashboardLayout = () =>  {


  const [mode, setMode] = useState("light");
  const [tab, setTab] = useState("home");
  const dispatch = useDispatch();


  const changeTheme = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

   let user = useSelector(state => state.LoginReducer.user);

    const history = useHistory();

    useEffect(() => {
    if(!user){
        history.push("/");
    }
    },[user]);

    const [collapsed, setCollapsed] = useState("false");

 const onCollapse = () => {
 setCollapsed(!collapsed);
  };
    return (
      <Layout className="dash-layout"  style={{ minHeight: "100vh", minWidth: "600px" }}>
        <Sider className={`side-bar  ${mode}`} collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div style={{height: "15vh", background:"white"}} className="logo">
            <Row>
              <Col>
               <img style={{margin:"20px 0px 5px 10px"}} src={icons.profile}/>
              </Col>
             {!collapsed ?  <Col style={{marginTop:"15px", marginLeft: "5px"}}>
              <Row style={{margin:"10px 0px 5px 0px"}} >
              <Text className="profile-name">
                {user?.fullName}
              </Text>
              </Row>
              <Row>
                <Text className="profile-role">{user?.role}</Text>
              </Row>
              </Col> : null}
            </Row>
            </div>
          <Menu  className={`side-menu ${mode}`}  defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item  onClick={() => setTab("home")} className={`side-menu-item ${tab === "home" ? "active-tab" :""}`} key="1" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={`${tab === "home" ?  "home-icon-active" : "home-icon"}`} viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"/></svg>}>
             Home
            </Menu.Item>
            <Menu.Item  onClick={() => setTab("appointments")}  className={`side-menu-item ${tab === "appointments" ? "active-tab" :""}`}  key="2" icon={<svg xmlns="http://www.w3.org/2000/svg" className={`${tab === "appointments" ?  "calendar-icon-active" : "calendar-icon"}`} width="24.375" height="22.5" viewBox="0 0 24.375 22.5"><defs></defs><g transform="translate(-3.375 -4.5)"><path className="a" d="M25.406,6.75H23.063V8.131a.466.466,0,0,1-.469.46h-.937a.466.466,0,0,1-.469-.46V6.75H9.938V8.131a.466.466,0,0,1-.469.46H8.531a.466.466,0,0,1-.469-.46V6.75H5.719a2.33,2.33,0,0,0-2.344,2.3V24.7A2.33,2.33,0,0,0,5.719,27H25.406a2.33,2.33,0,0,0,2.344-2.3V9.051A2.33,2.33,0,0,0,25.406,6.75Zm.469,17.259A1.165,1.165,0,0,1,24.7,25.159H6.422A1.165,1.165,0,0,1,5.25,24.009V13.653a.466.466,0,0,1,.469-.46H25.406a.466.466,0,0,1,.469.46Z"/><path d="M11.25,5.063a.564.564,0,0,0-.562-.562H9.563A.564.564,0,0,0,9,5.063V6.75h2.25Z" transform="translate(-1.016)"/><path d="M27,5.063a.564.564,0,0,0-.562-.562H25.313a.564.564,0,0,0-.562.563V6.75H27Z" transform="translate(-3.859)"/></g></svg>}>
              Appointments
            </Menu.Item>
            <Menu.Item onClick={() => setTab("staffs")}   className={`side-menu-item ${tab === "staffs" ? "active-tab" :""}`}  key="3" icon={<svg xmlns="http://www.w3.org/2000/svg" className={`${tab === "staffs" ?  "staffs-icon-active" : "staffs-icon"}`} width="22.5" height="22.5" viewBox="0 0 22.5 22.5"><defs><style></style></defs><path className="a" d="M11.25,12.656A6.328,6.328,0,1,0,4.922,6.328,6.33,6.33,0,0,0,11.25,12.656Zm5.625,1.406H14.454a7.65,7.65,0,0,1-6.407,0H5.625A5.625,5.625,0,0,0,0,19.688v.7A2.11,2.11,0,0,0,2.109,22.5H20.391A2.11,2.11,0,0,0,22.5,20.391v-.7A5.625,5.625,0,0,0,16.875,14.063Z"/></svg>}>
              Staffs
            </Menu.Item>
            <Menu.Item onClick={() => setTab("reports")}   className={`side-menu-item ${tab === "reports" ? "active-tab" :""}`}  key="4" icon={<svg xmlns="http://www.w3.org/2000/svg" className={`${tab === "reports" ?  "reports-icon-active" : "reports-icon"}`} width="30.994" height="30.994" viewBox="0 0 30.994 30.994"><defs></defs><pat d="M0,0H30.994V30.994H0Z"/><path d="M23.663,3H5.583A2.59,2.59,0,0,0,3,5.583v18.08a2.59,2.59,0,0,0,2.583,2.583h18.08a2.59,2.59,0,0,0,2.583-2.583V5.583A2.59,2.59,0,0,0,23.663,3ZM17.206,21.08H8.166V18.5h9.04Zm3.874-5.166H8.166V13.331H21.08Zm0-5.166H8.166V8.166H21.08Z" /></svg>}>
              Reports
            </Menu.Item>
               <Menu.Item onClick={() => setTab("settings")}   className={`side-menu-item ${tab === "settings" ? "active-tab" :""}`}  key="5" icon={<svg xmlns="http://www.w3.org/2000/svg" className={`${tab === "settings" ?  "settings-icon-active" : "settings-icon"}`} width="21.886" height="22.5" viewBox="0 0 21.886 22.5"><defs></defs><path className="a" d="M22.71,15.353a8.767,8.767,0,0,0,.079-1.1,8.767,8.767,0,0,0-.079-1.1l2.374-1.856a.568.568,0,0,0,.135-.72l-2.25-3.893a.565.565,0,0,0-.686-.247l-2.8,1.125a8.219,8.219,0,0,0-1.9-1.1l-.427-2.981A.549.549,0,0,0,16.6,3H12.1a.549.549,0,0,0-.551.473l-.428,2.981a8.643,8.643,0,0,0-1.9,1.1L6.42,6.431a.549.549,0,0,0-.686.247l-2.25,3.893a.555.555,0,0,0,.135.72l2.374,1.856a8.922,8.922,0,0,0-.079,1.1,8.922,8.922,0,0,0,.079,1.1L3.619,17.209a.568.568,0,0,0-.135.72l2.25,3.892a.565.565,0,0,0,.686.248l2.8-1.125a8.219,8.219,0,0,0,1.9,1.1l.428,2.981a.549.549,0,0,0,.551.473h4.5a.549.549,0,0,0,.551-.473l.427-2.981a8.643,8.643,0,0,0,1.9-1.1l2.8,1.125a.549.549,0,0,0,.686-.247l2.25-3.893a.568.568,0,0,0-.135-.72L22.71,15.352Zm-8.359,2.835a3.938,3.938,0,1,1,3.938-3.937A3.942,3.942,0,0,1,14.352,18.188Z" transform="translate(-3.406 -3)"/></svg>}>
              Settings
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={`site-layout ${mode}`} >
          <Header  className={`menu-bar site-layout-background ${mode}`} style={{ padding: 0}} >
            <h1 className="topnav-title">
             {tab === "home" ? "Overview" : tab === "appointments" ? "Appointments" : tab === "staffs" ? "Staffs" : tab === "reports" ? "Reports" : tab === "settings" ? "Settings" : "Overview" }
              </h1>
            <div>
              <Input prefix={<SearchOutlined className="search-icon"  />} placeholder="Search for patients" className="search-bar" />
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg"   className={`${mode === "light" ? "dark-mode-toogle-btn" : "dark-mode-toogle-btn-night" }`}  onClick={() => changeTheme() } width="24.75" height="27.004" viewBox="0 0 24.75 27.004"><path d="M28.223,24.9c-.2.007-.408.014-.612.014A12.4,12.4,0,0,1,18.7,21.164,12.809,12.809,0,0,1,15,12.108a12.971,12.971,0,0,1,1.23-5.534,18.327,18.327,0,0,1,.956-1.645.277.277,0,0,0-.274-.429A13.537,13.537,0,0,0,5.625,17.93,13.469,13.469,0,0,0,18.991,31.5,13.255,13.255,0,0,0,29.18,26.712a12.843,12.843,0,0,0,1.153-1.533.284.284,0,0,0-.288-.429A12.007,12.007,0,0,1,28.223,24.9Z" transform="translate(-5.625 -4.496)"/></svg>
             <img className="logout-btn" onClick={() => dispatch(logoutRequest())} src={icons.logout}/>
            </div>
          </Header>
          <Content className="dashboard-content" style={{ margin: "2px 16px" }}>
        
           
      
               {tab === "home" ? <HomePage/> 
          : tab === "appointments" ? <AppointmentsPage/> 
          : tab === "staffs" ? <StaffsPage/> 
          : tab === "reports" ? <ReportsPage/> 
          : tab === "settings" ? <SettingsPage/> 
          : <HomePage/> }
          </Content>
     
        </Layout>
       
      </Layout>
    );
};

export default DashboardLayout;