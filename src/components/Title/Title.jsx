import style from './title.module.css'
import imgUrl from "../../utils/titleImg/title.png"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Title = ()=> {
    const navigate = useNavigate();
    const isLogin = useSelector(state => state.login)
    
    
    useEffect(()=>{

      if(isLogin !== true) { navigate("/")}
    
    },[])
    

    const backHome = () => {
    navigate("/home")
    }

    return(
    <header className={style.containerTitle}>
        <img onClick={backHome} className={style.titleImg}src={imgUrl}></img>
    </header>
)
}
export default Title;
