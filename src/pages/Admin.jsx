import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Card } from "react-bootstrap";


function Admin() {  

  const {getUser} = useContext(CartContext);

  let user =  getUser();
  

  return (
    <>
    
   <div className='admin-hello'>Hola! {user.name}</div> 

   <Card style={{with:'20rem'}} className="shadow border-0 admin-body">
  <Card.Img variant="top" className="card-image" src={user.avatar} />
  <Card.Body>
    <Card.Title><span >{user.name}</span>
    <span><strong >{user.email}</strong></span>
    </Card.Title>
    
    <Card.Text><span >creado el: {user.createdAt}</span>
    
    </Card.Text>
  </Card.Body>
</Card>
    </>
   

      );
}  


export default Admin;  
