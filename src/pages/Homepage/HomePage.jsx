import { Layout } from 'antd';
import Styles from './HomePage.module.css'

function HomePage() {
  const { Content, Sider} = Layout;

  return (
    <div className={Styles.HomePage}>
        <div className={Styles.HomePageContent} >
          <Layout>
              <Sider
                style={{background: '#fff'}}
                width="25%"
              >
                slider 1
              </Sider>
              <Content>
                đây là home 
              </Content>
              <Sider
                style={{background: '#fff'}}
              >
                Sider 2
              </Sider>
          </Layout>
        </div>
    </div>
  );
}

export default HomePage;
