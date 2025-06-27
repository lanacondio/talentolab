import Social from "./Social";
import  styled from 'styled-components'


const FooterTag = styled.footer`
  background-color: #f1f1f1; padding-top: 10px; text-align: center; margin-top: 20px;
  `


function Footer() {  
    return (  
        <FooterTag className="py-3 mt-auto">              
            <p className="mb-0">&copy; {new Date().getFullYear()} Wild Urban Sport · Todos los derechos reservados</p>
            <Social />
        </FooterTag>  
    );  
}  

export default Footer;  