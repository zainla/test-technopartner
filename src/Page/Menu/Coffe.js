import { List, Avatar, Card } from 'antd';
import home2 from './../../Assets/home2.png'
const data = [
    {
        title: 'Caramel Machiatto',
    },
    {
        title: 'Latte Freddo',
    },
    {
        title: 'Vannila Latte',
    },
];
export default function CoffeMenu() {
    return (
        <>

            <Card
                title="Coffe"
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
                title="Cold Brew"
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