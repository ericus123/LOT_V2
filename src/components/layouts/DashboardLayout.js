import { Input, Layout, Menu } from "antd";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { icons } from "../../utils/icons";


const { Header, Content, Sider } = Layout;

const DashboardLayout = ({children}) =>  {


  const [mode, setMode] = useState("light");
  setMode("light");

   let user = useSelector(state => state.AuthReducer.user);

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
      <Layout  style={{ minHeight: "100vh" }}>
        <Sider className="side-bar" collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div style={{height: "10vh", background:"white"}} className="logo"></div>
          <Menu  className="side-menu"  theme={mode} defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item  onClick={() => history.push("/dashboard")} className="side-menu-item" key="1" icon={<img src={icons.home}/>}>
             Home
            </Menu.Item>
            <Menu.Item  onClick={() => history.push("/dashboard/appointments")}  className="side-menu-item"  key="2" icon={<img src={icons.appointments}/>}>
              Appointments
            </Menu.Item>
            <Menu.Item onClick={() => history.push("/dashboard/staffs")}   className="side-menu-item"  key="3" icon={<img src={icons.staffs}/>}>
              Staffs
            </Menu.Item>
               <Menu.Item onClick={() => history.push("/dashboard/reports")}   className="side-menu-item"  key="4" icon={<img src={icons.reports}/>}>
              Reports
            </Menu.Item>
               <Menu.Item onClick={() => history.push("/dashboard/settings")}   className="side-menu-item"  key="5" icon={<img src={icons.settings}/>}>
              Settings
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="menu-bar site-layout-background" style={{ padding: 0 }} >
            <h1 className="topnav-title">
              Overview
              </h1>
            <div>
              <Input placeholder="Search for patients" className="search-bar" />
            </div>
            <div>
             <img className="dark-mode-btn" src={icons.night}/>&nbsp;&nbsp;&nbsp;
             <img className="logout-btn" onClick={() => window.location.reload()} src={icons.logout}/>
            </div>
          </Header>
          <Content style={{ margin: "2px 16px" }}>
           {children}
          </Content>
        </Layout>
      </Layout>
    );
};

export default DashboardLayout;