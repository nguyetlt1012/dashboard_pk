import { Space, Table, Button } from "antd";
import { PoweroffOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

const enterEdit = (user) => {
	console.log(user);
};
const columns1 = [
	{
		title: "STT",
		dataIndex: "key",
	},
	{
		title: "Mã sinh viên",
		dataIndex: "code",
	},
	{
		title: "Tên sinh viên",
		dataIndex: "name",
		sorter: (a, b) => a.name.length - b.name.length,
		sortDirections: ["descend"],
	},
	{
		title: "Chương trình học",
		dataIndex: "program",
	},
	{
		title: "Loại sinh viên",
		dataIndex: "type",
	},
	{
		title: "Ngày sinh",
		dataIndex: "birthDate",
		sortDirections: ["descend"],
	},
	{
		title: "Khóa",
		dataIndex: "grade",
		sortDirections: ["descend"],
	},
	{
		title: "Hanh dong",
		dataIndex: "actions",
		render: (_, user) => (
			<Space>
				<Button
					title={"Sua nhan vien"}
					type="primary"
					icon={<EditOutlined />}
					onClick={() => enterEdit(user)}
				/>
				<Button
					title={"Quen mat khau"}
					type="primary"
					style={{ background: "#17a2b8" }}
					icon={<PoweroffOutlined />}
					onClick={() => enterEdit(user)}
				/>
				<Button
					title={"Xoa"}
					type="primary"
					style={{ background: "#343a40" }}
					icon={<DeleteOutlined />}
					onClick={() => enterEdit(user)}
				/>
			</Space>
		),
	},
];

const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Trips",
      dataIndex: "trips",
    },
  ];
const dataFk = new Array(100).fill(null).map((_, j) => {
	const name = `Studen ${j + 1}`;
	const code = `E0${j + 1}`;
	const type = `HE_CHUAN`;
	const birthDate = `${j + 1}/12/2022`;
	return {
		key: j + 1,
		code: code,
		name: name,
		type: type,
		birthDate: birthDate,
		actions: "",
	};
});
const onChange = (pagination, filters, sorter, extra) => {
	console.log("params", pagination, filters, sorter, extra);
};
const Board = (props) => {
    const {data, totalPages, loading, fetchUsers} = props;

	return (
		<Table
			loading={loading}
			columns={columns}
			dataSource={data}
			onChange={onChange}
			pagination={{
				pageSize: 10,
				total: totalPages,
				onChange: (page) => {
					fetchUsers({page: page});
				},
			}}
		/>
	);
};
export default Board;
