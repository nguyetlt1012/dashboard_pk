import { Button, Divider, Radio, Space } from 'antd';
import { CloudDownloadOutlined, CloudUploadOutlined, PlusOutlined} from '@ant-design/icons';
import '../employee/employee.css'
import Board from './board';
const Employee = () =>{
    return (
        <div className="user-container">
            <div className="h-header" style={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
                <h1>Danh sach nhan vien</h1>
                <div className="buttons">
                    <Button icon={<CloudDownloadOutlined />} size={'large'} style={{background:'#343a40'}} className={'btn-h-header'}>
                        Tai xuong file mau
                    </Button>
                    <Button icon={<CloudUploadOutlined />} size={'large'} style={{background:'#138496'}} className={'btn-h-header'}>
                        Tai len file mau
                    </Button>
                    <Button icon={<PlusOutlined />} size={'large'} style={{background:'#46a34a'}} className={'btn-h-header'}>
                        Them moi
                    </Button>
                </div>
            </div>
            <div className='user-table'>
                <Board/>
            </div>
        </div>
    );
}

export default Employee;