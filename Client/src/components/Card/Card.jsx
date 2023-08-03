import styles from "./card.module.css"

//hoks imports
import { useNavigate,useLocation } from "react-router-dom";
import { flushSync } from "react-dom";
import { useState,useEffect } from "react";
import {addFavorite,delFavorite,addUltimateRoute} from "../../redux/actions"
import { useSelector,useDispatch } from "react-redux";


export default function Card({id,name,species,gender,image,onClose}) {
   
    //hooks
    const backhome = useLocation()
    const navigate = useNavigate();
    const [isLike,setIsLike] = useState(false);
    const Dispatch = useDispatch();
    //recibo el estado global myFavorite.
    const characters = useSelector(state => state.myFavorite);

   // captura el evento del botón, y activa el view transition api.
    const handleBackHome = () => {
        if(!document.startViewTransition){
            Dispatch(dispatch => dispatch(addUltimateRoute(backhome.pathname)))
            navigate(`/detail/${id}`)
            return;
        }
        document.startViewTransition( ()=>{
            Dispatch(dispatch => dispatch(addUltimateRoute(backhome.pathname)))
            flushSync(()=> navigate(`/detail/${id}`))
        }
        );
    }
    // funcion que devuelve un componente dependiendo de un estado.
    const handleFavorite = () =>{
        if(!isLike){
            setIsLike(true)
            Dispatch(dispatch => dispatch(addFavorite({id,name,species,gender,image,onClose})));
        }
        else {
            setIsLike(false)
            Dispatch(dispatch => dispatch(delFavorite(id)))
        }
    }
    
    useEffect(()=>{
        const isTrue = characters.some(element => element.id === id);
         isTrue ? setIsLike(true) : setIsLike(false)
    },[]) 

    //crea el boton dependiendo del estado local.
    const linked = ()=>{
        if(isLike) return <button className={styles.linked} onClick={handleFavorite}>❤️</button>
        else return <button className={styles.linked} onClick={handleFavorite}>🤍</button>
    }
  
    const obj = {
        img: {viewTransitionName:`img${id}`},
        name:{viewTransitionName:`name${id}`},
        gender:{viewTransitionName:`gender${id}`},
        specie:{viewTransitionName:`specie${id}`}
    }

    return (
       <div className={styles.conteinerCard}>
         
           
         <header className={styles.containerHeader}>
           <button className={styles.btnClose} onClick={()=> backhome.pathname !== '/myFavorite' ? onClose(id):null }></button>
           <img onClick={handleBackHome} className={styles.img} style={obj.img} src={image} alt={`imagen de ${name}`} />
         </header>
           <h2  style={obj.name} className={styles.name}>{name}</h2>
          <aside className={styles.info}>
            <h4  className={styles.text}>Especie:</h4> <span style={obj.specie} className={styles.span}>{species}</span>
            <h4   className={styles.text}>Genero:</h4> <span style={obj.gender} className={styles.span}>{gender}</span>
            {linked()}
          </aside>
       </div>
       );
 }
