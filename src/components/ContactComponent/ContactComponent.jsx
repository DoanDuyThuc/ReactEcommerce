import {Button, Image, Input} from 'antd'
import Styles from './ContactComponent.module.css'
import backgroundContact from '../../public/images/image102.png'


function ContactComponent() {
    return (
      <div className={Styles.ContactComponent}>
        <div className={Styles.ContactComponentContain}>
          <Image width={'100%'} height={420} className={Styles.ContactComponentContainImage} preview={false} src={backgroundContact}/>
          <div className={Styles.ContactComponentContainTitle}>
            <h1>An easy way to send requests to all suppliers</h1>
            <span>text sadddddddddddddddddddddddddddddddddddddddddddddđ</span>
          </div>
          <div className={Styles.ContactComponentContainFromInput}>
            <h2>Send quote to suppliers</h2>
            <Input/>
            <Input.TextArea/>
            <Input/>
            <Button type='primary' >Send inquiry</Button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContactComponent;
  