import logo from './logo-technopartner.png';
import './App.css';
import { Button, Card, Form, Input, Row, Col } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import Home from './Page/home';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Indexmenu from './Page/indexmenu';


const { Header, Content, Footer } = Layout;

export default function App() {
  const [idpage, _idpage] = useState('0')

  function toHome() {
    _idpage('1')
  }
  const Login =
    <>
      <div className="App">
        <Row gutter={20}>
          <Col span={4}></Col>
          <Col span={16}>
            <Card bordered={false} style={{ display: '-ms-inline-flexbox' }}
              cover={<img alt="example" src={logo} />}>
              <Form
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 24 }}
              >
                <h5>Email</h5>
                <Form.Item>
                  <Input></Input>
                </Form.Item>
                <h5>Password</h5>
                <Form.Item>
                  <Input width='50%'></Input>
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    span: 8,
                    offset: 9,
                  }}
                >
                  {/* <Link to='./Page/home'> */}

                  <Button shape='round' style={{ display: 'flex' }} onClick={toHome}>Login</Button>
                  {/* </Link> */}
                </Form.Item>
              </Form>
            </Card>
          </Col>
          <Col span={4}></Col>
        </Row>
      </div>
    </>
  return (
    <Content>
      {idpage === '0' ? Login : idpage === '1' ? <Home page={_idpage} /> : idpage === '2' ? <Indexmenu page={_idpage} /> : null}

    </Content>
  );
}

