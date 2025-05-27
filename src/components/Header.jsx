
import NavBar from "./AppNavBar";
import Social from "./Social";

function Header() {  
    return (  
        <header style={{ backgroundColor: "#FFFF", textAlign: "center", color: "black" }}>  
            <NavBar />
            <h1>Wild Urban Sport</h1>  
            <img src={"src/img/brand_icon.jpg"} width={"60px"} />         
        </header>  
    );  
}  

export default Header;