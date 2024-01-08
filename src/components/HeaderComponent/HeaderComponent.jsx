
import Styles from './HeaderComponent.module.css'
import { Col, Layout, Row, Image } from 'antd';

function HeaderComponent() {
  const { Header} = Layout;
    return (
      <Layout>

        <Header className={Styles.HeaderComponent}>
            <Row>
              <div className={Styles.HeaderLogo}>
                <Image src="../../public/images/logo.png"/>
              </div>
            </Row>
        </Header>
      </Layout>
    );
  }
  
  export default HeaderComponent;
  