import { Col, DatePicker, Form, Input, Modal, Radio, Row, Select } from "antd";
import moment from "moment/moment";
const { Option } = Select;

const FormEdit = (props) => {
    const { open, onEdit, onCancel, student } = props;
    const [form] = Form.useForm();
    if (student?.code) {
        form.setFieldsValue({
			code: student?.code || '',
			name: student?.name || '',
			type: student?.type || 'HE_CHUAN',
			birthDate: moment(student?.birthDate || "YYYY-MM-DD HH:mm:ss"),
			grade: student?.grade || ''
		});
    }
    return (
        <Modal
            width={700}
            open={open}
            title="Chinh sua sinh vien"
            okText="Edit student"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form.validateFields()
                    .then((values) => {
                        // form.resetFields();
                        onEdit(values);
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
                        <Col span={12}>
                            <Form.Item
                                name="code"
                                label="Mã sinh viên"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please input the title of collection!",
                                    },
                                ]}
                            >
                                <Input value={"12"} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="name"
                                label="Tên sinh viên"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please input the title of collection!",
                                    },
                                ]}
                            >
                                <Input value={student?.name} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item>
                    <Row gutter={8}>
                        <Col span={18}>
                            <Form.Item
                                name="type"
                                label="Loại sinh viên"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select!",
                                    },
                                ]}
                            >
                                <Select value={student?.type}>
                                    <Option value="HE_CLC"></Option>
                                    <Option value="HE_CHUAN"></Option>
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
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select!",
                                    },
                                ]}
                            >
                                <DatePicker />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form.Item>

                <Form.Item
                    name="grade"
                    label="Khóa"
                    rules={[
                        {
                            required: true,
                            message: "Please input the title of collection!",
                        },
                    ]}
                >
                    <Input value={student?.grade} />
                </Form.Item>
            </Form>
        </Modal>
    );
};
export default FormEdit;
