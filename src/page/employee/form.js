import { Col, Form, Input, Modal, Radio, Row, Select } from "antd";
const { Option } = Select;

const FormCreate = (props) => {
	const { open, onCreate, onCancel } = props;
	const [form] = Form.useForm();
    form.resetFields();
	return (
		<Modal
            width={700}
			open={open}
			title="Them nhan vien"
			okText="Create"
			cancelText="Cancel"
			onCancel={onCancel}
			onOk={() => {
				form.validateFields()
					.then((values) => {
						form.resetFields();
						onCreate(values);
					})
					.catch((info) => {
						console.log("Validate Failed:", info);
					});
			}}
		>
			<Form
				form={form}
				layout="vertical"
				name="form_in_modal"
				initialValues={{ modifier: "public" }}
                className="form_create"
			>
                <Form.Item>
                    <Row gutter={8}>
                        <Col span={12}><Form.Item name="code" label="Ma nhan vien" rules={[{ required: true, message: "Please input the title of collection!" }]}>
					        <Input />
				        </Form.Item></Col>
                        <Col span={12}><Form.Item name="name" label="Ten nhan vien" rules={[{ required: true, message: "Please input the title of collection!" }]}>
					        <Input />
				        </Form.Item></Col>
                    </Row>
                </Form.Item>
				<Form.Item>
                    <Row gutter={8}>
                        <Col span={12}><Form.Item name="phone" label="So dien thoai" rules={[{ required: true, message: "Please input the title of collection!" }]}>
					        <Input />
				        </Form.Item></Col>
                        <Col span={12}>
                            <Form.Item
                                name="department"
                                label="Bo phan"
                                rules={[{ required: true, message: "Please select!" }]}
                            >
                                <Select value={"Nguoi dung"}>
                                    <Option value="aaa"></Option>
                                    <Option value="bbb"></Option>
                                    <Option value="Nguoi dung"></Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item>
                    <Row gutter={8}>
                        <Col span={12}>
                            <Form.Item
                                name="campus"
                                label="Co so"
                                rules={[{ required: true, message: "Please select!" }]}
                            >
                                <Select value={'ha noi'}>
                                    <Option value="aaa"></Option>
                                    <Option value="bbb"></Option>
                                    <Option value="ha noi"></Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                        <Form.Item
                            name="bank"
                            label="Ngan hang"
                            rules={[{ required: true, message: "Please select!" }]}
                        >
                            <Select value={'Bidv'}>
                                <Option value="aaa"></Option>
                                <Option value="bbb"></Option>
                                <Option value="Bidv"></Option>
                            </Select>
                        </Form.Item>
                        </Col>
                    </Row>
                </Form.Item>

                
                <Form.Item
					name="bank_number"
					label="So tai khoan"
					rules={[{ required: true, message: "Please input the title of collection!" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item name="address" label="Dia chi">
					<Input />
				</Form.Item>
				
			</Form>
		</Modal>
	);
};
export default FormCreate;
