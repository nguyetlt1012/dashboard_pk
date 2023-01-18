import { Space, Table, Button } from "antd";
import { PoweroffOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';

const enterEdit = (user) =>{
    console.log(user);
}
const columns = [
    {
        title: "STT",
        dataIndex: "key",
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
        sorter: (a, b) => a.num_day - b.num_day,
        sortDirections: ["descend"],
    },
    {
        title: "So luong hop hoan thanh",
        dataIndex: "num_box",
        sorter: (a, b) => a.num_box - b.num_box,
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
        render: (_, user) => (
            <Space>
                <Button title={"Sua nhan vien"} type="primary" icon={<EditOutlined />} onClick={() => enterEdit(user)} />
                <Button title={"Quen mat khau"} type="primary" style={{background: '#17a2b8'}} icon={<PoweroffOutlined />} onClick={() => enterEdit(user)} />
                <Button title={"Xoa"} type="primary"  style={{background: '#343a40'}}  icon={<DeleteOutlined />} onClick={() => enterEdit(user)} />
            </Space>
        ),
    },
];
const dataFk = new Array(4).fill(null).map((_, j) =>{
    const name = `Employee ${j+1}`;
    const code = `E0${j+1}`;
    const phone = `03366677${j}`;
    return {
        key: j+1,
        code: code,
        name: name,
        phone: phone,
        department: 'Product',
        num_day: 4*(j+1),
        num_box: 4*(j+1),
        campus: 'HN',
        address: 'asdf',
        bank_number: '00001111011',
        actions: '',
    } 
})
const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
};
const Board = () => (
    <Table columns={columns} dataSource={dataFk} onChange={onChange} />
);
export default Board;
