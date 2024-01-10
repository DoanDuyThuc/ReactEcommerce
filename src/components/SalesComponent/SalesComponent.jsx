import { Button, Col, Image, Row } from 'antd';
import Styles from './SalesComponent.module.css'
import Image1 from '../../public/images/image35.png'
import Image2 from '../../public/images/image34.png'
import Image3 from '../../public/images/image28.png'
import Image4 from '../../public/images/image29.png'
import Image5 from '../../public/images/image23.png'


function SalesComponent() {

    const colSpan = 24 / 5;

    return (
      <div className={Styles.SalesComponent}>
        <div style={{border: '1px solid #efefef'}}>
            <Row>
                <Col style={{borderRight: '1px solid #efefef', padding: '15px 15px 15px 27px'}} span={5}>
                    <h2 className={Styles.SalesComponentLeftTitle} >Deals and offers</h2>
                    <span className={Styles.SalesComponentLeftContent}>Hygiene equipments</span>
                    <div className={Styles.SalesComponentTimer}>
                        <ul className={Styles.SalesComponentTimerList}>
                            <li className={Styles.SalesComponentTimerItem}>
                                <h4 className={Styles.SalesComponentTimerItemCount}>04</h4>
                                <span>days</span>
                            </li>
                            <li className={Styles.SalesComponentTimerItem}>
                                <h4 className={Styles.SalesComponentTimerItemCount}>13</h4>
                                <span>Hour</span>
                            </li>
                            <li className={Styles.SalesComponentTimerItem}>
                                <h4 className={Styles.SalesComponentTimerItemCount}>34</h4>
                                <span>Min</span>
                            </li>
                            <li className={Styles.SalesComponentTimerItem}>
                                <h4 className={Styles.SalesComponentTimerItemCount}>56</h4>
                                <span>Sec</span>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col span={19}>
                    <Row className={Styles.SalesComponentRight}>
                        <Col style={{width: '20%'}} span={colSpan}>
                            <div className={Styles.SalesComponentItem}>
                                <Image height={100} preview={false} src={Image1}/>
                                <span className={Styles.SalesComponentItemTitle}>Smart watches</span>
                                <Button className={Styles.SalesComponentItemBTN}>-25%</Button>
                            </div>
                        </Col>
                        <Col style={{width: '20%'}} span={colSpan}>
                            <div className={Styles.SalesComponentItem}>
                                <Image height={100} preview={false} src={Image2}/>
                                <span className={Styles.SalesComponentItemTitle}>Laptops</span>
                                <Button className={Styles.SalesComponentItemBTN}>-15%</Button>
                            </div>
                        </Col>
                        <Col style={{width: '20%'}} span={colSpan}>
                            <div className={Styles.SalesComponentItem}>
                                <Image height={100} preview={false} src={Image3}/>
                                <span className={Styles.SalesComponentItemTitle}>GoPro Cameras</span>
                                <Button className={Styles.SalesComponentItemBTN}>-40%</Button>
                            </div>
                        </Col>
                        <Col style={{width: '20%'}} span={colSpan}>
                            <div className={Styles.SalesComponentItem}>
                                <Image height={100} preview={false} src={Image4}/>
                                <span className={Styles.SalesComponentItemTitle}>Headphones</span>
                                <Button className={Styles.SalesComponentItemBTN}>-25%</Button>
                            </div>
                        </Col>
                        <Col style={{width: '20%'}} span={colSpan}>
                            <div className={Styles.SalesComponentItem}>
                                <Image height={100} preview={false} src={Image5}/>
                                <span className={Styles.SalesComponentItemTitle}>Samsung Galaxy</span>
                                <Button className={Styles.SalesComponentItemBTN}>-25%</Button>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
      </div>
    );
  }
  
  export default SalesComponent;
  