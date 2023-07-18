import styled from "./login.module.css";
import {Link,useNavigate} from "react-router-dom";
import src  from '../../utils/imgForm/Rick And Morty Poster.jpeg'
import img2 from '../../utils/imgForm/iniciar-sesion.webp'
import { useEffect, useState } from "react";
import validation from './validation'
const Login = () => {
  const [userData,setUserData] = useState({
    username:'',
    password:''
  });
  const [status,setStatus] = useState(false);
  const [errors,setErros] = useState({
    username:'',
    password:''
  });
const {username,password} = {username:'manu07x@hotmail.com', password:'123456a'}
const navigate = useNavigate();
  const handleChangeInput= (event) =>{
    setUserData({ ...userData, [event.target.name]: event.target.value });
     setErros(validation(userData));
}
  
const handleDataSeccion = (event) =>{
    event.preventDefault()
    if(userData.username === username && userData.password === password) setStatus(true);
    else alert('Datos Incorrecto');
};

useEffect(()=>{
    status && navigate('/home');
},[status])

    return (
        
    <div className={styled.contentPage}>

        <div className={styled.container}>
            <div className={styled.containerTitle}> 
            <img src={img2} className={styled.title}/>            
            </div>
            

            <img src={src} className={styled.image}/> 
            {/* <div className={styled.containerImg}>
            </div> */}

           {/* <div className={styled.login}>
               </div> */}

           <form onSubmit={handleDataSeccion} className={styled.form}>
                <input  className={styled.input} onChange={handleChangeInput} name='username' type="email" placeholder="Nombre de usuario" />
                {errors.username && <span style={{color:'red',fontSize:'10px'}}>{errors.username}</span>}
                <input  className={styled.input} onChange={handleChangeInput} name='password' type="password" placeholder="Contraseña" />
                {errors.password && <span style={{color:'red',fontSize:'10px'}}>{errors.password}</span>}

                <div className={styled.main_div}>
                <button className={styled.btn} type="submit" value="Iniciar sección">Iniciar sesion</button>
                </div>
            </form>
        </div>
    </div>
                


            
            
    )
}

export default Login;