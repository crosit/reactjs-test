import '../styles/Login.css';

function Registro() {
    return (
      <div className="container">

        <div className="login">
    
          <form action="#">
            <div className="contain">
              <h2 >registro</h2>
            </div>
            <div className="contain">
              <input type="text" placeholder="Usuario"></input>
            </div>
            <div className="contain ">
              <input type="password" placeholder="Contraseña"></input>
            </div>
            <div className="contain">
              <button>Registrarse</button>
            </div>
            <div className="contain">
              <a href="index.js">Si ya estas registrado, Ingresa aqui</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default Registro;
  