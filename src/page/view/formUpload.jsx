import { Form, Modal, Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import axios from "axios";
const FormUpload = (props) => {
    const { open, onCancel } = props;
    const [ file, setFile ] = useState(null);

    const handelUpload = (options)=>{
        setFile(options.file);
    }
    const uploadFile = () => {
        const formData = new FormData();
        console.log(file)
        formData.append("file", file);
        axios.post("aaa", formData).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            message.error(err);
        })
        
    };
      
    return (
        <Modal
            width={500}
            open={open}
            title="Import students"
            okText="Import"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={uploadFile}
        >
            <Upload
                accept=""
                onChange={handelUpload}
                beforeUpload={()=>false}
            >
                <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>
        </Modal>
    );
};
export default FormUpload;
