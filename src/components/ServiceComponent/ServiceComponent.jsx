import {Button, Card, Col, Image, Row} from 'antd'
import {
  SearchOutlined,
  SendOutlined,
  SecurityScanOutlined

}
from '@ant-design/icons'
import Styles from './ServiceComponent.module.css'
import ServiceImage1 from '../../public/images/image108.png'
import ServiceImage2 from '../../public/images/Maskgroup.png'

function ServiceComponent() {

  const {Meta} = Card

    return (
      <div className={Styles.ServiceComponent}>
        <h3>Our extra services</h3>
        <Row className={Styles.ServiceComponentContainer}>
          <Col className={Styles.ServiceComponentItem} span={6}>
            <Card
              className={Styles.ServiceComponentItemCard}
              hoverable
              style={{
                width: 310,
              }}
              cover={<Image className={Styles.ServiceComponentItemCardImage} height={120} preview={false} alt="example" src={ServiceImage1} />}
            >
              <Meta title="Source from" description="Industry Hubs" />
              <Button className={Styles.ServiceComponentItemBTN}><SearchOutlined /></Button>
            </Card>
          </Col>
          <Col  className={Styles.ServiceComponentItem} span={6}>
            <Card
              className={Styles.ServiceComponentItemCard}
              hoverable
              style={{
                width: 310,
              }}
              cover={<Image className={Styles.ServiceComponentItemCardImage} height={120} preview={false} alt="example" src={ServiceImage2} />}
            >
              <Meta title="Source from" description="Industry Hubs" />
              <Button className={Styles.ServiceComponentItemBTN}><SendOutlined /></Button>
            </Card>
          </Col>
          <Col className={Styles.ServiceComponentItem} span={6}>
            <Card
              className={Styles.ServiceComponentItemCard}
              hoverable
              style={{
                width: 310,
              }}
              cover={<Image className={Styles.ServiceComponentItemCardImage} height={120} preview={false} alt="example" src={ServiceImage1} />}
            >
              <Meta title="Source from" description="Industry Hubs" />
              <Button className={Styles.ServiceComponentItemBTN}><SecurityScanOutlined /></Button>
            </Card>
          </Col>
          <Col className={Styles.ServiceComponentItem} span={6}>
            <Card
              className={Styles.ServiceComponentItemCard}
              hoverable
              style={{
                width: 310,
              }}
              cover={<Image className={Styles.ServiceComponentItemCardImage} height={120} preview={false} alt="example" src={ServiceImage2} />}
            >
              <Meta title="Source from" description="Industry Hubs" />
              <Button className={Styles.ServiceComponentItemBTN}><SearchOutlined /></Button>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
  
  export default ServiceComponent;
  