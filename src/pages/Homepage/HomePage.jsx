import HomeProductsComponent from '../../components/HomeProductsComponent/HomeProductsComponent';
import SalesComponent from '../../components/SalesComponent/SalesComponent';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import ContactComponent from '../../components/ContactComponent/ContactComponent';
import Styles from './HomePage.module.css'
import Product1 from '../../public/images/product1.png'
import Product2 from '../../public/images/product2.png'
import Product3 from '../../public/images/product3.png'
import Product4 from '../../public/images/product4.png'
import Product5 from '../../public/images/product5.png'
import Product6 from '../../public/images/product6.png'
import Product7 from '../../public/images/product7.png'
import Product8 from '../../public/images/product8.png'
import ImageSlider1 from '../../public/images/image92.png'
import ImageSlider2 from '../../public/images/Group970.png'
import ListProductComponent from '../../components/ListProductComponent/ListProductComponent';
import ServiceComponent from '../../components/ServiceComponent/ServiceComponent';
import SuppliersComponent from '../../components/SuppliersComponent/SuppliersComponent';
import SubsbriceComponent from '../../components/SubsbriceComponent/SubsbriceComponent';

function HomePage() {
  const ProductOder = {
    myArray1 : [
      {
        name : 'Sort chairs',
        price: 19,
        image: Product1
      },
  
      {
        name : 'Sort chairs',
        price: 19,
        image: Product2
      },
      {
        name : 'Sort chairs',
        price: 19,
        image: Product3
      },
      {
        name : 'Sort chairs',
        price: 19,
        image: Product4
      },
      {
        name : 'Sort chairs',
        price: 19,
        image: Product5
      },
      {
        name : 'Sort chairs',
        price: 19,
        image: Product6
      },
      {
        name : 'Sort chairs',
        price: 19,
        image: Product7
      },
      {
        name : 'Sort chairs',
        price: 19,
        image: Product8
      },
  
  ],
  myArray2 : [
    {
      name : 'Sort chairs',
      price: 19,
      image: Product1
    },

    {
      name : 'Sort chairs',
      price: 19,
      image: Product2
    },
    {
      name : 'Sort chairs',
      price: 19,
      image: Product3
    },
    {
      name : 'Sort chairs',
      price: 19,
      image: Product4
    },
    {
      name : 'Sort chairs',
      price: 19,
      image: Product5
    },
    {
      name : 'Sort chairs',
      price: 19,
      image: Product6
    },
    {
      name : 'Sort chairs',
      price: 19,
      image: Product7
    },
    {
      name : 'Sort chairs',
      price: 19,
      image: Product8
    },

]
}


  return (
    <div className={Styles.HomePage}>
      <SliderComponent/>
      <SalesComponent/>
      <HomeProductsComponent productOder={ProductOder.myArray1} imageSlider = {ImageSlider1}/>
      <HomeProductsComponent productOder={ProductOder.myArray2} imageSlider = {ImageSlider2}/>
      <ContactComponent/>
      <ListProductComponent/>
      <ServiceComponent/>
      <SuppliersComponent/>
      <SubsbriceComponent/>
    </div>
  );
}

export default HomePage;
