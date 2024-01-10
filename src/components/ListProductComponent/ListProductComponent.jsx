import {Col, Image, Row} from 'antd'
import Styles from "./ListProductComponent.module.css";
import ware1 from '../../public/images/ware1.png'


function ListProductComponent() {
    return (
      <div className={Styles.ListProductComponent}>
        <h3>Recommended items</h3>
        <Row className={Styles.ListProductComponentContain}>
          <Col className={Styles.ListProductComponentItem}>
            <Image height={152} preview={false} src={ware1}/>
            <div className={Styles.ListProductComponentItemContent}>
              <h5>$10.30</h5>
              <span>T-shirts with multiple colors, for men</span>
            </div>
          </Col>
          <Col className={Styles.ListProductComponentItem}>
            <Image height={152} preview={false} src={ware1}/>
            <div className={Styles.ListProductComponentItemContent}>
              <h5>$10.30</h5>
              <span>T-shirts with multiple colors, for men</span>
            </div>
          </Col>
          <Col className={Styles.ListProductComponentItem}>
            <Image height={152} preview={false} src={ware1}/>
            <div className={Styles.ListProductComponentItemContent}>
              <h5>$10.30</h5>
              <span>T-shirts with multiple colors, for men</span>
            </div>
          </Col>
          <Col className={Styles.ListProductComponentItem}>
            <Image height={152} preview={false} src={ware1}/>
            <div className={Styles.ListProductComponentItemContent}>
              <h5>$10.30</h5>
              <span>T-shirts with multiple colors, for men</span>
            </div>
          </Col>
          <Col className={Styles.ListProductComponentItem}>
            <Image height={152} preview={false} src={ware1}/>
            <div className={Styles.ListProductComponentItemContent}>
              <h5>$10.30</h5>
              <span>T-shirts with multiple colors, for men</span>
            </div>
          </Col>
          <Col className={Styles.ListProductComponentItem}>
            <Image height={152} preview={false} src={ware1}/>
            <div className={Styles.ListProductComponentItemContent}>
              <h5>$10.30</h5>
              <span>T-shirts with multiple colors, for men</span>
            </div>
          </Col>
          <Col className={Styles.ListProductComponentItem}>
            <Image height={152} preview={false} src={ware1}/>
            <div className={Styles.ListProductComponentItemContent}>
              <h5>$10.30</h5>
              <span>T-shirts with multiple colors, for men</span>
            </div>
          </Col>
          <Col className={Styles.ListProductComponentItem}>
            <Image height={152} preview={false} src={ware1}/>
            <div className={Styles.ListProductComponentItemContent}>
              <h5>$10.30</h5>
              <span>T-shirts with multiple colors, for men</span>
            </div>
          </Col>
          <Col className={Styles.ListProductComponentItem}>
            <Image height={152} preview={false} src={ware1}/>
            <div className={Styles.ListProductComponentItemContent}>
              <h5>$10.30</h5>
              <span>T-shirts with multiple colors, for men</span>
            </div>
          </Col>
          <Col className={Styles.ListProductComponentItem}>
            <Image height={152} preview={false} src={ware1}/>
            <div className={Styles.ListProductComponentItemContent}>
              <h5>$10.30</h5>
              <span>T-shirts with multiple colors, for men</span>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  
  export default ListProductComponent;
  