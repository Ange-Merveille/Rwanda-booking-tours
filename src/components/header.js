import { Divider } from "antd";
import React, { useState } from "react";
import "./header.css"
import img from "../assets/img10.jpg";
import { Modal, Form, Input, Button } from "antd"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const [Visible, setVisible] = useState(false);
    // const[form]=Form.useForm();

    const onFinish = (values) => {
        console.log(values); localStorage.setItem("userLogedIn", true);
        navigate("/dash/newtour")
    }
    const navigate = useNavigate();

    return (
        <>
            <Modal
                visible={Visible}
                width="30%" 
                margin-top="60px"
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}>
                <h1>Signin Form</h1>
                <Form onFinish={onFinish}>
                    <Form.Item label="Email" name="email" rules={[{ required: "true", type: "email" }]}>
                        <Input type="email" /></Form.Item>
                    <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                        <Input type="password" />
                    </Form.Item>

                    <Button htmlType="submit" onClick={() => {
                       

                    }}>Log in</Button>


                </Form>
            </Modal>


            <div className="header">

                <div class="logo">
                    <img src={img} />
                </div>
                <div className="navbar-right">
                    <a href="home">Home</a>
                    <a href="about">About us</a>

                    {/* <a href="garelly">Garelly</a> */}
                    <a href="tours">Tours</a>


                    <a href="contactus">Contact us</a>
                    {/* <a href="login">Log in</a> */}
                    <a href="dash/newtour">New Tours </a>
                    <a href="#" onClick={() => setVisible(true)}>Sign in</a>






                </div>
            </div>
        </>
    )
}
export default Header