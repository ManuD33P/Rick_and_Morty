import style from "./title.module.css";
import imgUrl from "../../utils/titleImg/title.png";
import useLoginDetected from "../services/useLoginDetected";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Title = () => {
 const isLogin = useSelector(state => state.login);
 const navigate = useNavigate();
 useEffect(()=>{
  if(!isLogin) 
  navigate('/');
 },[])


 const {backHome} =  useLoginDetected();
  return (
    <header className={style.containerTitle}>
      <img onClick={backHome} alt="this is a title of rick and morty" className={style.titleImg} src={imgUrl}></img>
    </header>
  );
};


export default Title;
