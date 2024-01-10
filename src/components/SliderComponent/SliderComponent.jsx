import { Button, Col, Row, Image } from 'antd';
import Styles from './SliderComponent.module.css'
import Banner from '../../public/images/banner.png'
import Avatar from '../../public/images/Avatar.png'

function SliderComponent() {

    return (
      <div className={Styles.SliderComponent}>
            <div>
                <Row className={Styles.SliderComponentRow}>
                    <Col span={5}>
                        <Button className={Styles.SliderComponentItemBtnActive}>Automobiles</Button>
                        <Button className={Styles.SliderComponentItemBtn}>Clothes and wear</Button>
                        <Button className={Styles.SliderComponentItemBtn}>Home interiors</Button>
                        <Button className={Styles.SliderComponentItemBtn}>Computer and tech</Button>
                        <Button className={Styles.SliderComponentItemBtn}>Tool, equipments</Button>
                        <Button className={Styles.SliderComponentItemBtn}>Sport and outdoor</Button>
                        <Button className={Styles.SliderComponentItemBtn}>Animal and pets</Button>
                        <Button className={Styles.SliderComponentItemBtn}>Machinery tools</Button>
                        <Button className={Styles.SliderComponentItemBtn}>More category</Button>
                    </Col>
                    <Col span={12}>
                        <Image style={{height: '100%'}} src={Banner}/>
                    </Col>
                    <Col span={7}>
                        <div className={Styles.SliderComponentRight}>
                            <div className={Styles.SliderComponentRightSignIn}>
                                <div className={Styles.SliderComponentRightSignInAVT}>
                                    <Image preview={false} src={Avatar}/>
                                    <span className={Styles.SliderComponentRightSignInAVTContent}>Hi, user let's get stated</span>
                                </div>
                                <Button style={{width: "100%"}} type='primary'>
                                    Join now
                                </Button>
                                <Button style={{width: "100%", marginTop: '12px'}} >
                                    Login
                                </Button>
                            </div>
                            <div className={Styles.SliderComponentRightContent}>
                                <span>Get US $10 off with a new supplier</span>
                            </div>
                            <div className={Styles.SliderComponentRightContent2}>
                                <span>Send quotes with supplier preferences</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
      </div>
    );
  }
  
  export default SliderComponent;
  