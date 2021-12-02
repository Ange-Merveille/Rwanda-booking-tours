import React,{useState} from"react";
import "./dashlayout.css";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Layout, Menu } from 'antd';

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const Dashlayout=({children})=>{
    const[collapsed,setcollapsed]= useState(false);
    const toggle=()=>{
        setcollapsed(!collapsed);
    }
    return(
        // <div className="dashBody">
        //     {children}
        //     </div>
        <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} style={{height:"105vh"}}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="dash/newtour" > Create Tour</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="dash/alltours" > Manage all Tours</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />} onClick={()=>localStorage.removeItem("userLogedIn")}>

             <Link to="home"> Log out</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>

    )
}
export default Dashlayout;