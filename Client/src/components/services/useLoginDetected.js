
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useDispatch,useSelector } from "react-redux";
import { getFavorite,addLogin } from "../../redux/actions";

function useLoginDetected(){
  var dataSession = sessionStorage.getItem("login")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const statusLogin = useSelector(state => state.login);
  const backHome = () => {
    navigate("/home");
  };

  const isLogin = async () => {
    if(!statusLogin)
    if(dataSession){
      const {data} = await axios(`http://localhost:3001/rickandmorty/islogin?id=${dataSession}`)
      if(data.status){
        dispatch((dispatch)=> dispatch(getFavorite(data.myFavorite)))
        dispatch((dispatch)=> dispatch(addLogin(true)))
        backHome()
      }
    }
  }


  


return {
  backHome,
  isLogin
}

}


export default useLoginDetected