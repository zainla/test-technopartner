import { Button, Layout, Row, Image, Card, Col, Modal } from "antd"
import logo from './../../src/logo-technopartner.png'
import barcode from './../../src/barcode.png'
import home1 from './../Assets/home1.png'
import menu1 from './../Assets/menu1.png'
import { useState } from "react"
const { Content } = Layout
export default function Home(props) {
    const [showbarcode, _showbarcode] = useState(false)

    const showBarcode = () => {
        _showbarcode(true);
    };

    const handleOk = () => {
        _showbarcode(false);
    };

    const handleCancel = () => {
        _showbarcode(false);
    };
    function Menu() {
        props.page('2')
    }
    return (
        <Content>
            <Row>
                <Image
                    width={200}
                    src={logo}
                    preview={false}
                />
            </Row>
            <Row>

                <div className="App-back-Card">
                    <div style={{ margin: '10px', width: '75%' }}>
                        {/* <Col span={20}> */}
                        <Card>
                            <h5>Good Afternoon,</h5>
                            <h5>Guntur Saputro</h5>
                            <Row  >
                                <Col span={8}>
                                    <Button shape="circle" onClick={showBarcode}>
                                        <Image
                                            width={50}
                                            src={barcode}
                                            preview={false}
                                            style={{ display: 'flex' }}

                                        />
                                    </Button>
                                </Col>
                                <Col span={5}>
                                    <h5>Saldo</h5>
                                    <h5>Point</h5>
                                </Col>
                                <Col span={5}>
                                    <h5>Rp.279.000</h5>
                                    <h5 style={{ color: "green" }}>2.500</h5>
                                </Col>
                            </Row>
                        </Card>
                        {/* </Col> */}
                    </div>
                </div>
            </Row>
            <Row>
                <div className="App-logo-hitam"  >

                    <Image
                        width={200}
                        src={logo}
                        preview={false}
                        style={{ display: 'flex' }}
                    />
                </div>
            </Row>
            <Row>
                <div className="App-button">
                    <Col span={15}>
                        <div style={{ display: 'flex' }}>
                            <Button type='link' block><Image src={home1} width={20} preview={false} /></Button>
                        </div>
                    </Col>
                    <Col span={10}>
                        <div style={{ display: 'flex' }}>
                            <Button type='link' onClick={Menu}><Image src={menu1} width={20} preview={false} /></Button>
                        </div>
                    </Col>
                </div>
            </Row>

            <Modal visible={showbarcode} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <p>Show the QR Code below to the cashier</p><br />
                <div style={{ display: 'flex' }}>
                    <Image
                        width={100}
                        src={barcode}
                        preview={false}
                    />
                </div>
            </Modal>
        </Content >

    )
}