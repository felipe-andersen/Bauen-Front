import { Container } from "./styles";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import LayoutLoginClient from "../../components/LayoutLoginClient";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function LoginClient(props) {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/login/client", data);
      
      const {
        token,
        client: {
          // eslint-disable-next-line no-useless-rename
          email:  email ,
            // eslint-disable-next-line no-useless-rename
          name:  name ,
            // eslint-disable-next-line no-useless-rename
          room:  room ,
            // eslint-disable-next-line no-useless-rename
          id: id ,
        },
      } = response.data;
      console.log(response.data.client);
      
      localStorage.setItem("token", token);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("id", id);

      localStorage.setItem("room", room);
      console.log("logador");
      history.push("/profileclient");
    } catch (error) {
      console.log(error);
      // toast.error(error.response.data.errors[0].message)
    }
  };

  return (
    <>
      <ToastContainer />
      <Container>
        <LayoutLoginClient>
          <div className="ContainerInput">
            <div className="title">
              <h2>LOGIN</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>
                <input
                  type="email"
                  name="name"
                  placeholder="E-mail"
                  {...register("email")}
                />
                <input
                  type="password"
                  name="name"
                  placeholder="Senha"
                  {...register("password")}
                />
              </label>
              <button type="submit">
                <h2>LOGAR</h2>
              </button>
            </form>
            <div className="EsqueciSenha">Esquecia a Senha</div>
            <div className="Line"></div>
            <div className="title">
              <h3>CADASTRAR-SE</h3>
            </div>
          </div>
        </LayoutLoginClient>
      </Container>
    </>
  );
}

export default LoginClient;
