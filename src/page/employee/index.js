import { Button, Divider, Radio, Space } from 'antd';
import { CloudDownloadOutlined, CloudUploadOutlined, PlusOutlined} from '@ant-design/icons';
import '../employee/employee.css'
import Board from './board';
import { useState } from 'react';
import FormCreate from './form';

const Employee = () =>{
    const [open, setOpen] = useState(false);
    const onCreate = (values) => {
        console.log('Received values of form: ', values);
        setOpen(false);
    };

    return (
        <div className="user-container">
            <div className="h-header" style={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
                <h1>Danh sach nhan vien</h1>
                <div className="buttons">
                    <Button icon={<CloudDownloadOutlined />} type = "primary" size={'large'} style={{background:'#343a40'}} className={'btn-h-header'}>
                        Tai xuong file mau
                    </Button>
                    <Button icon={<CloudUploadOutlined />} type = "primary" size={'large'} style={{background:'#138496'}} className={'btn-h-header'}>
                        Tai len file mau
                    </Button>
                    <Button icon={<PlusOutlined />} type = "primary" size={'large'} style={{background:'#46a34a'}} className={'btn-h-header'} onClick= {()=>{
                        setOpen(true);
                    }}> 
                        Them moi
                    </Button>
                    <FormCreate open={open} onCreate={onCreate} onCancel = {()=>{setOpen(false)}}/>
                </div>
            </div>
            <div className='user-table'>
                <Board/>
            </div>
        </div>
    );
}

export default Employee;