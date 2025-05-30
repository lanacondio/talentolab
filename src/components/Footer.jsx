import Social from "./Social";

function Footer() {  
    return (  
        <footer style={{ backgroundColor: "#f1f1f1", paddingTop: "10px", textAlign: "center", marginTop: "20px" }} 
        
            className="py-3 mt-auto"
        >              
            <p className="mb-0">&copy; {new Date().getFullYear()} Wild Urban Sport · Todos los derechos reservados</p>
            <Social />
        </footer>  
    );  
}  

export default Footer;  