import { Table } from "antd";
const columns = [
    {
        title: "STT",
        dataIndex: "STT",
    },
    {
        title: "Ma nhan vien",
        dataIndex: "code",
    },
    {
        title: "Ten nhan vien",
        dataIndex: "name",
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ["descend"],
    },
    {
        title: "So dien thoai",
        dataIndex: "phone",
    },
    {
        title: "Bo phan",
        dataIndex: "department",
    },    
    {
        title: "So luong day hoan thanh",
        dataIndex: "num_day",
        sorter: (a, b) => a.num_day.length - b.num_day.length,
        sortDirections: ["descend"],
    },
    {
        title: "So luong hop hoan thanh",
        dataIndex: "num_box",
        sorter: (a, b) => a.num_box.length - b.num_box.length,
        sortDirections: ["descend"],
    },
    {
        title: "Co so",
        dataIndex: "campus",
    },
    {
        title: "Dia chi",
        dataIndex: "address",
    },
    {
        title: "So tai khoan",
        dataIndex: "bank_number",
    },
    {
        title: "Hanh dong",
        dataIndex: "actions",
    },
];
const data = [
    {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
    },
    {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
    },
    {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
    },
    {
        key: "4",
        name: "Jim Red",
        age: 32,
        address: "London No. 2 Lake Park",
    },
];
const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
};
const Board = () => (
    <Table columns={columns} dataSource={data} onChange={onChange} />
);
export default Board;
