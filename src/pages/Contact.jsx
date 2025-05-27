
function Contact() {

    
      return (
<>

    <div class="container main-auth">
    <div className="row">
        <div className="col-md-4"></div>    
        <div className="col-md-4">
        <div className="form-auth"   style={{ minHeight: "370px", textAlign:"center" }}  >
        <p className="form-title">Contactanos</p>        
      
        <form method="Post" className="form">
          <div className="">     

            <input className="input-form"  placeholder="Email" data-pattern-text="El valor debe ser un email válido" 
            data-required-text="Este campo es obligatorio." 
            data-typemismatch-text="El valor debe ser un email válido" 
             pattern="^([\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4})?$" 
            required="" type="email" ></input>
            </div>

            <div class="@Html.MaterialCssClass(Model.Login.Password)">                
              
            <input  className="input-form text-area"    placeholder="Comentario" data-required-text="Este campo es obligatorio."
     required="" type="text"></input>
            </div>

            <button type="submit" id="iniciar-sesion" class="btn btn-block btn-primary">
                Enviar
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



export default Contact;

