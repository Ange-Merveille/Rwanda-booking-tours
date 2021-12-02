
import React,{useState} from "react";
import Dashlayout from "../../components/dashlayout";
// import{Form} from "antd";
import { Table, Space} from 'antd';
import {EyeOutlined, DeleteOutlined, EditOutlined} from "@ant-design/icons"
import allavailabletours from"../../assets/constants/tours.json"
import Usersinformation from"../../assets/constants/information.json"

<h1>All Tours</h1>
    const column = [
        {
            title:"Title",
        dataIndex:"title",
        key:'title',
       },
        {
            title:"Date Scheduled",
            dataIndex:"dateScheduled",
            key:"datescheduled"
        },
        {
            title:"Seats",
            dataIndex:"seats",
            key:"seats"


        },
        {
            title:"Price($)",
            dataIndex:"price",
            key:"price"

        },
        {title:"Action",
        key:"action",
        render:(text, record)=>(
            <Space>
                <a><EyeOutlined/></a>
                <a><DeleteOutlined/></a>
                <a><EditOutlined/></a>
                
            </Space>
        )

        }
    ]
    
    

    

       
    
    

const column2 = [
    {
        title:"First Name",
    dataIndex:"first name",
    key:'firstname',
},
    {
        title:"Last Name",
        dataIndex:"last name",
        key:"lastname"
    },
    {
        title:"Email",
        dataIndex:"email",
        key:"email"


    },
    {
        title:"Address",
        dataIndex:"adress",
        key:"adress"},

        {
            title:"Phone",
            dataIndex:"phone",
            key:"phone"
    
    },
    {title:"Action",
    key:"action",
    render:(text, record)=>(
        <Space>
            <a style={{color:"green"}}>Accept</a>
            <a style={{color:"red"}}>Reject</a>
            
            
        </Space>
    )

    }
]




const Alltours = () => {
    return (
        <>
        <h1 style={{textAlign:"center"}}>All Tours</h1>
    <Table columns={column} dataSource={allavailabletours}/>
    <h1  style={{textAlign:"center"}}>All Users</h1>
      <Table columns={column2}dataSource={Usersinformation}/>
    </>

  

)}
    export default Alltours;