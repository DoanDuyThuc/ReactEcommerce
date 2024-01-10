import FooterComponent from "../FooterComponent/FooterComponent";
import HeaderComponent from "../HeaderComponent/HeaderComponent";


function DefaultComponent({children}) {
    return (
      <div className="DefaultComponent">
            <HeaderComponent/>
            {children}
            <FooterComponent/>
      </div>
    );
  }
  
  export default DefaultComponent;
  