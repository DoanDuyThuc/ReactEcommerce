import {Button, Col, Image, Row } from 'antd'
import chees3 from '../../public/images/chess3.png'
import {
    TwitterOutlined,
    InstagramOutlined,
    YoutubeOutlined,
    AppleOutlined,
    PlayCircleOutlined,
    UpOutlined
}
from '@ant-design/icons'
import Styles from './FooterComponent.module.css'
import Logo from '../../public/images/logo.png'

function FooterComponent() {
    return (
        <>
            <div className={Styles.FooterComponent}>
                <Row className={Styles.FooterComponentContainer}>
                        <Col className={Styles.FooterComponentItemCol} span={8}>
                            <div className={Styles.FooterComponentLeft}>
                                <div className={Styles.FooterComponentLeftLogo}>
                                    <Image width={150} height={46} src={Logo} preview={false}/>
                                    <p>Best information about the company gies here but now lorem ipsum is</p>
                                </div>
                                <ul className={Styles.FooterComponentNetwork}>
                                    <li className={Styles.FooterComponentNetworkItem}>
                                        <TwitterOutlined />
                                    </li>
                                    <li className={Styles.FooterComponentNetworkItem}>
                                        <TwitterOutlined />
                                    </li>
                                    <li className={Styles.FooterComponentNetworkItem}>
                                        <InstagramOutlined />
                                    </li>
                                    <li className={Styles.FooterComponentNetworkItem}>
                                        <YoutubeOutlined />
                                    </li>
                                    <li className={Styles.FooterComponentNetworkItem}>
                                        <YoutubeOutlined />
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col className={Styles.FooterComponentItemCol} span={8}>
                            <div className={Styles.FooterComponentItem}>
                                <h4>About</h4>
                                <span>About us</span>
                                <span>About us</span>
                                <span>About us</span>
                                <span>About us</span>
                            </div>
                            <div className={Styles.FooterComponentItem}>
                                <h4>Partnership</h4>
                                <span>About us</span>
                                <span>Find store</span>
                                <span>Categories</span>
                                <span>Blogs</span>
                            </div>
                            <div className={Styles.FooterComponentItem}>
                                <h4>Information</h4>
                                <span>Help Center</span>
                                <span>Money Refund</span>
                                <span>Shipping</span>
                                <span>Contact us</span>
                            </div>
                            <div className={Styles.FooterComponentItem}>
                                <h4>For users</h4>
                                <span>Login</span>
                                <span>Register</span>
                                <span>Settings</span>
                                <span>My Orders</span>
                            </div>
                        </Col>
                        <Col style={{justifyContent: 'center'}} className={Styles.FooterComponentItemCol} span={8}>
                            <div className={Styles.FooterComponentItem}>
                                <h4>Get App</h4>
                                <Button className={Styles.FooterComponentItemBTN}>
                                    <AppleOutlined className={Styles.FooterComponentItemIcon} />
                                    <div style={{    display: 'flex' ,flexDirection: 'column'}}>
                                            <span className={Styles.FooterComponentItemTitle}>Dowload on the</span>
                                            <span className={Styles.FooterComponentItemContent}>App Store</span>
                                    </div>
                                </Button>
                                <Button className={Styles.FooterComponentItemBTN}>
                                    <PlayCircleOutlined className={Styles.FooterComponentItemIcon} />
                                    <div style={{    display: 'flex' ,flexDirection: 'column'}}>
                                            <span className={Styles.FooterComponentItemTitle}>Get it on</span>
                                            <span className={Styles.FooterComponentItemContent}>Google Play</span>
                                    </div>
                                </Button>
                            </div>
                        </Col>
                </Row>
            </div>
            <div className={Styles.FooterComponentEnd}>
                <span>© 2023 Ecommerce. </span>
                <div>
                    <Image preview={false} src={chees3}/>
                    <span style={{margin: '0 24px'}}>English</span>
                    <UpOutlined />
                </div>
           </div>
        </>
    );
  }
  
  export default FooterComponent;
  