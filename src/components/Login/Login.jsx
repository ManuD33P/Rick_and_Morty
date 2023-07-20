//estilos
import styled from "./login.module.css";
// hooks
import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addLogin } from "../../redux/actions";
// imagenes
import src  from '../../utils/imgForm/Rick And Morty Poster.jpeg'
import img2 from '../../utils/imgForm/iniciar-sesion.webp'
//funciones validadoras
import validation, {isLoginTrue} from './validation'

const Login = () => {
  
  //hooks
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  // estado local para obtener los inputs.

  const [userData,setUserData] = useState({
    username:'',
    password:''
  });

//

  const [errors,setErros] = useState({
    username:'',
    password:''
  });

useEffect(()=>{
  setErros(validation(userData))
},[userData])

   //obtengo los inputs, y hago validación para setear o errores.
  const handleChangeInput= (event) =>{
    setUserData({ ...userData, [event.target.name]: event.target.value });
     setErros(validation(userData));
  }
  
   //obtengo el envio del formulario.
const handleDataSeccion = (event) =>{
    event.preventDefault()
    const res = isLoginTrue(userData.username,userData.password)
    if(res === 'isTrue'){
      Dispatch((dispatch) => dispatch(addLogin(true)))
       navigate("/home")
    }
    else {
      setErros({...res});
    }
};



    return (
        
    <div className={styled.contentPage}>

        <div className={styled.container}>
            <div className={styled.containerTitle}> 
            <img src={img2} className={styled.title}/>            
            </div>
            

            <img src={src} className={styled.image}/> 
           

           <form onSubmit={handleDataSeccion} className={styled.form}>
                <input  className={styled.input} onChange={handleChangeInput} name='username' type="email" placeholder="Nombre de usuario" />
                
                {errors.username && <span style={{color:'red',fontSize:'10px'}}>{errors.username}</span>}
                
                <input  className={styled.input} onChange={handleChangeInput} name='password' type="password" placeholder="Contraseña" />
                
                {errors.password && <span style={{color:'red',fontSize:'10px'}}>{errors.password}</span>}

                <div className={styled.main_div}>
                <button className={styled.btn} type="submit">Iniciar sesion</button>
                </div>

            </form>
        </div>
    </div>
                


            
            
    )
}

export default Login;