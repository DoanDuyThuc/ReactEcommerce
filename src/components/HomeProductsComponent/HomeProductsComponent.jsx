import Styles from './HomeProductsComponent.module.css'
import { Button, Col, Image, Row } from 'antd';

function HomeProductsComponent({productOder, imageSlider}) {

    return (
      <div className={Styles.HomeProductsComponent}>
        <div style={{border: '1px solid #efefef'}}>
            <Row>
                <Col span={5}>
                    <div style={{height: '100%'}} className={Styles.HomeProductsComponentLeft}>
                        <Image style={{height: '100%'}} preview={false} src={imageSlider}/>
                        <div className={Styles.HomeProductsComponentLeftContent}>
                            <h3 style={{width: '100px'}}>Home and outdoor</h3>
                            <Button className={Styles.HomeProductsComponentLeftBtn}>Source now</Button>
                        </div>
                    </div>
                </Col>
                <Col span={19}>
                    <Row>
                        {productOder && productOder.map((item,index) => (
                            <Col key={index} span={6}>
                                <div className={Styles.HomeProductsComponentRightItem} >
                                <div className={Styles.HomeProductsComponentRightTitle}>
                                        <h4>{item.name}</h4>
                                    <div className={Styles.HomeProductsComponentRightContent}>
                                            <span>from</span>
                                            <span>USD {item.price}</span>
                                    </div>
                                </div>
                                <div className={Styles.HomeProductsComponentRightImage}>
                                        <Image preview={false} src={item.image}/>
                                </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
      </div>
    );
  }
  
  export default HomeProductsComponent;
  