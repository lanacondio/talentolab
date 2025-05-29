import { CartContext } from '../context/CartContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

function Login() {  

  const navigate = useNavigate();
    const {login} = useContext(CartContext);
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


const handleSubmit = async (e) => {
    
    e.preventDefault();
    setError('');
    setLoading(true);

     try {
    const response = await fetch('https://682159b9259dad2655af008a.mockapi.io/api/v1/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    console.log(data)
    login(data);
    navigate('/admin');  
  } catch (error) {    
    console.error('Error:', error);
    setError("Hubo un problema en el login");          
  }

     setLoading(false);
  };

  if(loading) return (<div className="d-flex justify-content-center p-4">
      <Spinner animation="border" role="status" />
    </div>);
  if(error){return (<p className='error'>Error al realizar login. Intente más tarde</p>)}

  return (
    <>

    <div className="container main-auth">
    <div className="row">
        <div className="col-md-4"></div>    
        <div className="col-md-4">
               <div className="form-auth" data-auth-container>
        <p className="form-title">Inicia sesión</p>        
      
        <form method="Post" className="form" onSubmit={handleSubmit}>
          <div >     

            <input className="input-form" placeholder="Email" data-pattern-text="El valor debe ser un email válido" 
            data-required-text="Este campo es obligatorio." 
            data-typemismatch-text="El valor debe ser un email válido" 
             pattern="^([\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4})?$" 
            required="" 
          onChange={e => setEmail(e.target.value)} type="email" ></input>
            </div>

            <div>                
              
            <input  className="input-form" data-pass-auth=""   placeholder="Password" data-required-text="Este campo es obligatorio."
             required="" type="password" onChange={e => setPassword(e.target.value)}></input>
            </div>

            <button type="submit" id="iniciar-sesion" className="btn btn-block btn-primary">
                Login
            </button>

        </form>
        
    </div>
            </div>    
        <div className="col-md-4"></div>    
        
    </div>   
    

 
    </div>
    </>
   
      );
}  


export default Login;  