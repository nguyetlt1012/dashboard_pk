import { Button, Divider, Input, Radio, Space, Upload } from "antd";
import { CloudDownloadOutlined, CloudUploadOutlined, PlusOutlined } from "@ant-design/icons";
import "./UserManagementPage.css";
import Board from "./board";
import { useState,useEffect } from "react";
import FormCreate from "./formCreate";
import SearchCpm from "./search";
import axios from "axios";
import FormUpload from "./formUpload";

const UserManagementPage = () => {
	const [open, setOpen] = useState(false);
	const [data, setData] = useState([]);
	const [totalPages, setTotalPages] = useState(1);
	const [loading, setLoading] = useState(false);
    const [textSearch, setTextSearch] = useState('');
	const [openUpload, setOpenUpload] = useState(false);

	const onCreate = (values) => {
		console.log("Received values of form: ", values);
		setOpen(false);
	};
	const onSearch = (value) => {
        console.log(value)
        setTextSearch(value)
        fetchUsers({textSearch: value})
    };

	useEffect(() => {
		fetchUsers(1);
	}, []);

	const fetchUsers = (filter) => {
		setLoading(true);
        const params = {
            page: filter?.page || 1,
            size: 10,
            textSearch: filter?.textSearch || textSearch
        } 
		axios
			.get(`https://api.instantwebtools.net/v1/passenger`,{
                params
            })
			.then((res) => {
				setData(res.data.data);
				setTotalPages(res.data.totalPages);
				setLoading(false);
			});
	};

	return (
		<div className="user-container">
			<div
				className="h-header"
				style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
			>
				<h1>Danh sách sinh viên</h1>
				<div className="buttons">
					<Button
						icon={<CloudDownloadOutlined />}
						type="primary"
						size={"large"}
						style={{ background: "#343a40" }}
						className={"btn-h-header"}
					>
						Tai xuong file mau
					</Button>
					<Button
						icon={<CloudUploadOutlined />}
						type="primary"
						size={"large"}
						style={{ background: "#138496" }}
						className={"btn-h-header"}
						onClick={() => {
							setOpenUpload(true);
						}}
						>
						Tai len file mau
					</Button>
					<Button
						icon={<PlusOutlined />}
						type="primary"
						size={"large"}
						style={{ background: "#46a34a" }}
						className={"btn-h-header"}
						onClick={() => {
							setOpen(true);
						}}
					>
						Thêm sinh viên
					</Button>
					<FormCreate
						open={open}
						onCreate={onCreate}
						onCancel={() => {
							setOpen(false);
						}}
					/>
					<FormUpload
						open={openUpload}
						onCancel={()=>{
							setOpenUpload(false);
						}}
					/>
				</div>
			</div>
			<div className="search-container">
				<SearchCpm
					searchWidth={300}
					onSearch={onSearch}
					placeholder={"Input id, name, ..."}
				/>
			</div>
			<div className="user-table">
				<Board
					data={data}
					totalPages={totalPages}
					loading={loading}
                    fetchUsers={fetchUsers}
				/>
			</div>
		</div>
	);
};
export default UserManagementPage;
