
// hooks
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addLogin } from "../../redux/actions";
//funciones validadoras
import validation, { isLoginTrue } from "../Login/validation";



function useLoginControl(){
    //hooks
    const navigate = useNavigate();
    const Dispatch = useDispatch();
    // estado local para obtener los inputs.
  
    const [userData, setUserData] = useState({
      username: "",
      password: "",
    });
  
    //
  
    const [errors, setErros] = useState({
      username: "",
      password: "",
    });
  
    useEffect(() => {
      setErros(validation(userData));
    }, [userData]);
  
    //obtengo los inputs, y hago validación para setear o errores.
    const handleChangeInput = (event) => {
      setUserData({ ...userData, [event.target.name]: event.target.value });
      setErros(validation(userData));
    };
  
    //obtengo el envio del formulario.
    const handleDataSeccion = async (event) => {
      event.preventDefault();
      try {

      const res =  await isLoginTrue(userData.username, userData.password);
        if (res) {
          Dispatch((dispatch) => dispatch(addLogin(true)));
          navigate("/home");
        } else {
          setErros({ ...res });
        }
      
      } catch (error) {
        alert(error.message)
      }
      
    };
    

    const logOut = () => {
      sessionStorage.clear();  
      Dispatch((dispatch) => dispatch(addLogin(false)));
    }


    return {
      handleDataSeccion,
      handleChangeInput,
      logOut,
      errors
    }
  }


  export default useLoginControl