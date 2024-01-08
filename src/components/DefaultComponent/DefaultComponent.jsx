import HeaderComponent from "../HeaderComponent/HeaderComponent";


function DefaultComponent({children}) {
    return (
      <div className="DefaultComponent">
            <HeaderComponent/>
            {children}
      </div>
    );
  }
  
  export default DefaultComponent;
  