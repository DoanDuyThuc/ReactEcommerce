
import Styles from './HeaderComponent.module.css'
import logo from '../../public/images/logo.png'
import flag from '../../public/images/flag.png'
import { Col, Layout, Row, Image, Input, Cascader, Button } from 'antd';
import {
  UserOutlined,
  FileTextOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  DownOutlined
} from '@ant-design/icons';

function HeaderComponent() {
  const { Header} = Layout;

  const options = [
    {
      code: 'zhejiang',
      name: 'Zhejiang',
    },
  ];

  const onChange = (value) => {
    console.log(value);
  };

    return (
      <Layout>
        <Header className={Styles.HeaderComponent}>
            <Row className={Styles.HeaderComponentContain}>
              <div className={Styles.HeaderLogo}>
                <Image preview={false} className={Styles.HeaderLogoImage} src={logo} width={150} height={56}/>
              </div>
              <div className={Styles.HeaderSearch}>
                <Input style={{borderRadius: 0}} placeholder='Search'/>

                <Cascader
                  style={{width: '145px'}} 
                  fieldNames={{
                    label: 'name',
                    value: 'code',
                    children: 'items',
                  }}
                  options={options}
                  onChange={onChange}
                  placeholder="All Category"
                />

                <Button className={Styles.HeaderSearchBTN}>Search</Button>
              </div>
              <div className={Styles.HeaderRight}>
                <div className={Styles.HeaderRightItem}>
                  <UserOutlined className='fontsize-18' />
                  <span className={Styles.HeaderRightItemLabel}>Profile</span>
                </div>
                <div className={Styles.HeaderRightItem}>
                  <FileTextOutlined className='fontsize-18' />
                  <span className={Styles.HeaderRightItemLabel}>Massage</span>
                </div>
                <div className={Styles.HeaderRightItem}>
                  <HeartOutlined className='fontsize-18' />
                  <span className={Styles.HeaderRightItemLabel}>Orders</span>
                </div>
                <div className={Styles.HeaderRightItem}>
                  <ShoppingCartOutlined className='fontsize-18' />
                  <span className={Styles.HeaderRightItemLabel}>My Cart</span>
                </div>
              </div>
            </Row>
        </Header>
        <Header className={Styles.Category}>
            <div className={Styles.CategoryLeft}>
              <div className={Styles.CategoryLeftItem}>
                <MenuOutlined />
                <span style={{marginLeft: '10px'}}>All category</span>
              </div>
              <div className={Styles.CategoryLeftItem}>
                <span>Hot offers</span>
              </div>
              <div className={Styles.CategoryLeftItem}>
                <span>Gift boxes</span>
              </div>
              <div className={Styles.CategoryLeftItem}>
                <span>Projects</span>
              </div>
              <div className={Styles.CategoryLeftItem}>
                <span>Menu item</span>
              </div>
              <div className={Styles.CategoryLeftItem}>
                <span style={{marginRight: '6px'}}>Help</span>
                <DownOutlined />
              </div>
            </div>
            <div className={Styles.CategoryLeft}>
              <div className={Styles.CategoryLeftItem}>
                <span style={{marginRight: '10px'}}>English, USD</span>
                <DownOutlined />

              </div>
              <div className={Styles.CategoryLeftItem}>
                <span>Ship to</span>
                <Image style={{padding: '0 12px'}} src={flag} preview={false}/>
                <DownOutlined />

              </div>
            </div>
        </Header>
      </Layout>
    );
  }
  
  export default HeaderComponent;
  