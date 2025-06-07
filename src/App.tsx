import { InputNumber, Typography, Flex } from 'antd';

const { Title, Text} = Typography;
function App() {
    return (
        <>
            <Title>Create a budget</Title>
            <div>
                <Flex vertical gap={8}>
                    <Text>Monthly Income</Text>
                    <InputNumber<number>
                        style={{backgroundColor: "#EBF0ED", color: "#618570"}}
                        width="150"
                        prefix="$"
                        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number}
                    />
                </Flex>

            </div>
        </>
    )
}

export default App
