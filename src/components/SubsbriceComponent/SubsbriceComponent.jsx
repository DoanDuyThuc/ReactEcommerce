import { Button, Input } from 'antd';
import {
    MailOutlined
}
from '@ant-design/icons'
import Styles from './SubsbriceComponent.module.css'


function SubsbriceComponent() {
    return (
      <div className={Styles.SubsbriceComponent}>
            <h3>Subscribe on our newsletter</h3>
            <span>Get daily news on upcoming offers from many suppliers all over the world</span>
            <div className={Styles.SubsbriceComponentInputContainer}>
                <Input className={Styles.SubsbriceComponentInput} placeholder='Email'/>
                <MailOutlined className={Styles.SubsbriceComponentIcon}/>
                <Button type='primary' className={Styles.SubsbriceComponentBTN}>Subscribe</Button>
            </div>
      </div>
    );
  }
  
  export default SubsbriceComponent;
  