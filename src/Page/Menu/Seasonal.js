import { List, Avatar, Card } from 'antd';
import home2 from './../../Assets/home2.png'
const data = [
    {
        title: 'Raisin Delight Frappe',
    },
    {
        title: 'Greentea Latte',
    },
    {
        title: 'Malaka Latte',
    },
];
export default function SeasonalMenu() {
    return (
        <>

            <Card
                title="Seasonal Product"
                bordered={false}
            >
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={home2} />}
                                title={item.title}
                                description="jangan lupa mik biar nggk panik"
                            />
                        </List.Item>
                    )}
                />
            </Card>
            <Card
                title="Best Seller"
                bordered={false}
            >
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={home2} />}
                                title={item.title}
                                description="jangan lupa mik biar nggk panik"
                            />
                        </List.Item>
                    )}
                />
            </Card>
        </>
    )
}