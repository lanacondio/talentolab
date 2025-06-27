import  styled from 'styled-components';

  const Div = styled.div`
    padding-top: "5px";
  `


function Social() {  
    return (  
        <Div>  
            <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0 }}>  
                <li><a href="https://instagram.com/wildurbansport/" style={{marginLeft:"10px", color: "white", textDecoration: "none" }}><img src={"src/img/instagram-brands.svg"} width={"20px"} /></a></li>  
                <li><a href="https://twitter.com" style={{marginLeft:"10px", color: "white", textDecoration: "none" }}><img src={"src/img/x-twitter-brands.svg"} width={"20px"} /></a></li>  
                <li><a href="https://facebook.com" style={{marginLeft:"10px", color: "white", textDecoration: "none" }}><img src={"src/img/facebook-brands.svg"} width={"20px"} /></a></li>                  
            </ul>  
        </Div>  
    );  
}  


export default Social;