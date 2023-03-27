import { Space, Select } from "antd";



const StatisticPage = () => {
    const handleChange = (e)=>{
        console.log(e)
    }
    return (
        <Space>
            <Select
                defaultValue="lucy"
                style={{
                    width: 120,
                }}
                onChange={handleChange}
                options={[
                    {
                        value: "jack",
                        label: "Jack",
                    },
                    {
                        value: "lucy",
                        label: "Lucy",
                    },
                    {
                        value: "Yiminghe",
                        label: "yiminghe",
                    },
                    {
                        value: "disabled",
                        label: "Disabled",
                        disabled: true,
                    },
                ]}
            />
        </Space>
    );
};
export default StatisticPage;
