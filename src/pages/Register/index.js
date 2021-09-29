import { Container } from "./styles";
import LayoutRegister from "../../components/LayoutRegister";
import { Link } from 'react-router-dom'

function Register() {
  return (
    <Container>
      <LayoutRegister>
        <div className="ContainerInput">
          <div className="title">
            <h2>Cadastro</h2>
          </div>
          <form>
            <label>
              <h3>Nome*</h3>
              <input type="text" name="name" placeholder="Nome" />
              <h3>Email*</h3>
              <input type="email" name="name" placeholder="Email" />
              <h3>Celular*</h3>
              <input type="text" name="name" placeholder="Celular" />
            </label>
            <Link to="/register2">
              <button>
                <h2>CONTINUAR -{">"} </h2>
              </button>
            </Link>
          </form>
        </div>
      </LayoutRegister>
    </Container>
  );
}

export default Register;