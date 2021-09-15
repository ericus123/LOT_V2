import React from "react";
import { Menu, Button } from "antd";
import {
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { icons } from "../../utils/icons";


const Sidebar = () => {
const [collapsed, setCollapsed] = useState(false);

 const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const [active,setActive] = useState("home");
  useState(() => {
console.log(active);
  },[active]);

    return (
      <div style={{ width: 300}} className="side-bar">
       
        <Menu
        className="side-menu"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          inlineCollapsed={collapsed}
        >
          <Menu.Item onClick={() => setActive("home")}  className={active === "home" ? "menu-item  active-item" : "menu-item"} key="1" icon={<img style={{color:"black !important"}} src={icons.home}/>}>
          Home
          </Menu.Item>
          <Menu.Item  onClick={() => setActive("appointments")}  className={active === "appointments" ? "menu-item  active-item" : "menu-item"}  key="2" icon={<img    src={icons.appointments}/>}>
         Appointments
          </Menu.Item>
          <Menu.Item onClick={() => setActive("staffs")}   className={active === "staffs" ? "menu-item  active-item" : "menu-item"}   key="3" icon={<img  src={icons.staffs}/>}>
           Staffs
          </Menu.Item>
             <Menu.Item onClick={() => setActive("reports")}  className={active === "reports" ? "menu-item  active-item" : "menu-item"}  key="4" icon={<img  src={icons.reports}/>}>
            Reports
          </Menu.Item>
             <Menu.Item  onClick={() => setActive("settings")}  className={active === "settings" ? "menu-item  active-item" : "menu-item"}  key="5" icon={<img  src={icons.settings}/>}>
           Settings
          </Menu.Item>
           <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16, bottom:0 }}>
         {collapsed ? <MenuUnfoldOutlined />: <img style={{backgroundColor:"white !important"}} src={icons.hide}/>}
        </Button>
        </Menu>
      </div>
    );
};

export default Sidebar;