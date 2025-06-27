import NavBar from "./AppNavBar";
import  styled from 'styled-components'

const HeaderTag = styled.header`
  background-color: #FFFF;  text-align: center; color: black;
  `

function Header() {  
    return (  
        <HeaderTag >  
            <NavBar />                   
        </HeaderTag>  
    );  
}  

export default Header;