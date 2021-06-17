import '../styles/Login.css';

function Login() {
    return (
      <div className="container">

        <div className="login">
    
          <form action="#">
            <div className="contain">
              <h2 >Iniciar Sesión</h2>
            </div>
            <div className="contain">
              <input type="text" placeholder="Usuario"></input>
            </div>
            <div className="contain ">
              <input type="password" placeholder="Contraseña"></input>
            </div>
            <div className="contain">
              <button>Iniciar Sesión</button>
            </div>
            <div className="contain">
              <a href="/registro">no tienes cuenta? Registrate aquí</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default Login;
  