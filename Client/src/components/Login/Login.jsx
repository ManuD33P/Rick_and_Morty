
//estilos
import styled from "./login.module.css";
// imagenes
import src from "../../utils/imgForm/Rick And Morty Poster.jpeg";
import img2 from "../../utils/imgForm/iniciar-sesion.webp";
import useLoginControl from "../services/useLoginControl";
import useLoginDetected from "../services/useLoginDetected";
import { useEffect } from "react";

const Login = () => {
  
  const {handleChangeInput,handleDataSeccion,errors} = useLoginControl();
  const {isLogin} = useLoginDetected();

  useEffect(()=>{
    isLogin();
  },[])
  return (
    <div className={styled.contentPage}>
      <div className={styled.container}>
        <div className={styled.containerTitle}>
          <img
            src={img2}
            alt="esta imagen es el title"
            className={styled.title}
          />
        </div>

        <img src={src} alt="esto es una imagen" className={styled.image} />

        <form onSubmit={handleDataSeccion} className={styled.form}>
          <input
            className={styled.input}
            onChange={handleChangeInput}
            name="username"
            type="email"
            placeholder="Username"
          />

          {errors.username && (
            <span style={{ color: "red", fontSize: "10px" }}>
              {errors.username}
            </span>
          )}

          <input
            className={styled.input}
            onChange={handleChangeInput}
            name="password"
            type="password"
            placeholder="Password"
          />

          {errors.password && (
            <span style={{ color: "red", fontSize: "10px" }}>
              {errors.password}
            </span>
          )}

          <div className={styled.main_div}>
            <button className={styled.btn} type="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
