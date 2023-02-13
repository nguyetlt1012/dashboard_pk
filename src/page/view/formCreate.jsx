import { Col, DatePicker, Form, Input, Modal, Radio, Row, Select } from "antd";
const { Option } = Select;

const FormCreate = (props) => {
    const { open, onCreate, onCancel } = props;
    const [form] = Form.useForm();
    form.resetFields();
    return (
        <Modal
            width={700}
            open={open}
            title="Thêm sinh viên"
            okText="Create new student"
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
                <Form.Item
                >
                    <Row gutter={8}>
                        <Col span={12}><Form.Item onBlur={() => {
                            console.log("Hello")
                        } } name="code" label="Mã sinh viên" rules={[{ required: true, message: "Please input the title of collection!" },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (value === '1') {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            }),
                        ]}>
                            <Input/>
                        </Form.Item></Col>
                        <Col span={12}><Form.Item name="name" label="Tên sinh viên" rules={[{ required: true, message: "Please input the title of collection!" }]}>
                            <Input />
                        </Form.Item></Col>
                    </Row>
                </Form.Item>
                <Form.Item>
                    <Row gutter={8}>
                        <Col span={18}>
                            <Form.Item
                                name="type"
                                label="Loại sinh viên"
                                rules={[{ required: true, message: "Please select!" }]}
                            >
                                <Select value={"HE_CHUAN"}>
                                    <Option value="HE_CHUAN"></Option>
                                    <Option value="HE_CLC"></Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item>
                    <Row gutter={8}>
                        <Col span={18}>
                            <Form.Item
                                name="birthDate"
                                label="Ngày sinh"
                                rules={[{ required: true, message: "Please select!" }]}
                            >
                                <DatePicker/>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form.Item>


                <Form.Item
                    name="grade"
                    label="Khóa"
                    rules={[{ required: true, message: "Please input the title of collection!" }]}
                >
                    <Input />
                </Form.Item>


            </Form>
        </Modal>
    );
};
export default FormCreate;
