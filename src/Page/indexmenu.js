import { Button, Layout, Tabs, Image, Col, Row } from "antd";
import { useState } from "react";
import home2 from './../Assets/home2.png'
import menu2 from './../Assets/menu2.png'
import BestSellerMenu from "./Menu/bestSeller";
import CoffeMenu from "./Menu/Coffe";
import SeasonalMenu from "./Menu/Seasonal";
const { Content } = Layout;
const { TabPane } = Tabs;

export default function Indexmenu(props) {
    const [tabActive, _tabActive] = useState('1')

    const callback = key => {
        if (key === '1') {
        }
        else if (key === '2') {
        }
        _tabActive(key)
    }
    function Menu() {
        props.page('1')
    }
    return (
        <Content>
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>Menu</h1>
            <Tabs activeKey={tabActive} defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Seasonal Product" key="1">
                    {tabActive === '1' ?
                        // <ReceivePr
                        // <ReceivePo
                        //     // detail={_detailJournal} detaildata={detailData} 
                        //     // visible={createJournal} _visible={_createJournal} 
                        //     callback={callback}
                        // /> 
                        <SeasonalMenu />
                        : null}
                </TabPane>
                <TabPane tab="Best Seller" key="2">
                    {tabActive === '2' ?
                        <BestSellerMenu />
                        : null}
                </TabPane>
                <TabPane tab="Coffe" key="3">
                    {tabActive === '3' ?
                        <CoffeMenu />
                        : null}
                </TabPane>
            </Tabs>
            <Row>
                <div className="App-button">
                    <Col span={15}>
                        <div style={{ display: 'flex' }}>
                            <Button type='link' block onClick={Menu}><Image src={home2} width={20} preview={false} /></Button>
                        </div>
                    </Col>
                    <Col span={10}>
                        <div style={{ display: 'flex' }}>
                            <Button type='link' ><Image src={menu2} width={20} preview={false} /></Button>
                        </div>
                    </Col>
                </div>
            </Row>
        </Content>
    )
}