import { Space, Table, Button } from "antd";
import { PoweroffOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import FormEdit from "./formEdit";

const enterEdit = (user) => {
	console.log("edit", user);
};

const columns1 = [
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
	const { data, totalPages, loading, fetchUsers } = props;
	const [open, setOpen] = useState(false);
	const [student, setStudent] = useState({});

	const onEdit = (student)=>{
		setStudent(student);
		setOpen(true);
	}

	const columns = [
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
						onClick={() => {
							onEdit(user);
						}}
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
	return (
		<div className="table-container">
			<Table
				loading={loading}
				columns={columns}
				dataSource={dataFk}
				onChange={onChange}
				pagination={{
					pageSize: 10,
					total: totalPages,
					onChange: (page) => {
						fetchUsers({ page: page });
					},
				}}
			/>
			<FormEdit
				open={open}
				onEdit={enterEdit}
				onCancel={() => setOpen(false)}
				student={student}
			/>
		</div>
	);
};
export default Board;
