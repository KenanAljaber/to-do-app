import logo from "../assets/toDo.png";
import "../styles/header.css"


const Header = () => {
    return (  
        <div className="header-container">
            
      <h1>To Do App</h1>
      <img src={logo}/>
        </div>

    );
}
 
export default Header;