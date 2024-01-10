import { Col, Image, Row } from 'antd'
import Styles from './SuppliersComponent.module.css'
import chessImage1 from '../../public/images/chess1.png'
import chessImage2 from '../../public/images/chess2.png'
import chessImage3 from '../../public/images/chess3.png'
import chessImage4 from '../../public/images/chess4.png'
import chessImage5 from '../../public/images/chess5.png'

function SuppliersComponent() {
    return (
      <div className={Styles.SuppliersComponent}>
        <h3>Suppliers by region</h3>
        <Row>
            <Col className={Styles.SuppliersComponentItem}>
                <Image preview={false} src={chessImage1}/>
                <div>
                    <h5>Arabic Emirates</h5>
                    <span>shopname.ae</span>
                </div>
            </Col>
            <Col className={Styles.SuppliersComponentItem}>
                <Image preview={false} src={chessImage2}/>
                <div>
                    <h5>Arabic Emirates</h5>
                    <span>shopname.ae</span>
                </div>
            
            </Col>
            <Col className={Styles.SuppliersComponentItem}>
                <Image preview={false} src={chessImage3}/>
                <div>
                    <h5>Arabic Emirates</h5>
                    <span>shopname.ae</span>
                </div>
            
            </Col>
            <Col className={Styles.SuppliersComponentItem}>
                <Image preview={false} src={chessImage4}/>
                <div>
                    <h5>Arabic Emirates</h5>
                    <span>shopname.ae</span>
                </div>
            
            </Col>
            <Col className={Styles.SuppliersComponentItem}>
                <Image preview={false} src={chessImage5}/>
                <div>
                    <h5>Arabic Emirates</h5>
                    <span>shopname.ae</span>
                </div>
            
            </Col>
            <Col className={Styles.SuppliersComponentItem}>
                <Image preview={false} src={chessImage5}/>
                <div>
                    <h5>Arabic Emirates</h5>
                    <span>shopname.ae</span>
                </div>
            
            </Col>
            <Col className={Styles.SuppliersComponentItem}>
                <Image preview={false} src={chessImage4}/>
                <div>
                    <h5>Arabic Emirates</h5>
                    <span>shopname.ae</span>
                </div>
            
            </Col>
            <Col className={Styles.SuppliersComponentItem}>
                <Image preview={false} src={chessImage3}/>
                <div>
                    <h5>Arabic Emirates</h5>
                    <span>shopname.ae</span>
                </div>
            
            </Col>
            <Col className={Styles.SuppliersComponentItem}>
                <Image preview={false} src={chessImage2}/>
                <div>
                    <h5>Arabic Emirates</h5>
                    <span>shopname.ae</span>
                </div>
            
            </Col>
            <Col className={Styles.SuppliersComponentItem}>
                <Image preview={false} src={chessImage1}/>
                <div>
                    <h5>Arabic Emirates</h5>
                    <span>shopname.ae</span>
                </div>
            
            </Col>
        </Row>
      </div>
    );
  }
  
  export default SuppliersComponent;
  