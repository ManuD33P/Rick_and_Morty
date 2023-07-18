
import { useNavigate,useParams } from "react-router-dom"
import { useState, useEffect} from "react";
import axios from "axios";
import { flushSync } from "react-dom";
import styles from './Detail.module.css';

const Detail = () => {
const [character, setCharacter] = useState([]);
const {id} = useParams();



useEffect( () => {

    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data}) => {
        if(data.name){
            setCharacter(data);
        } 
        else alert('Error al recibir los datos');

    }).catch((error)=> alert(error))
},[id])
const navigate = useNavigate();
// const handleBackHome = () => {
//     if(!document.startViewTransition){
//         navigate("/home")
//         return;
//     }
//     document.startViewTransition( ()=>
//     flushSync(()=> navigate("/home"))
//     );
// } 
const routeBack = localStorage.getItem('backRoute')
const handleBack = () => {
    if(!document.startViewTransition){
        navigate(routeBack)
        return;
    }
    document.startViewTransition( ()=>{
        flushSync(()=>{
            
            navigate(routeBack)
        })

    }
    );
}
if (!character) {
    return <div>Cargando...</div>; // Mostrar mensaje de carga mientras se obtienen los datos
  }
  const name = character.name || '';
  const species = character.species || '';
  const gender = character.gender || '';
  const originName = character.origin?.name || '';
  const locationName = character.location?.name || '';
  const status = character.status || '';

const obj = {
    img: {viewTransitionName:`img${id}`},
    name:{viewTransitionName:`name${id}`},
    gender:{viewTransitionName:`gender${id}`},
    specie:{viewTransitionName:`specie${id}`}
}
/* "name":"Aqua Rick","status":"unknown","species":"Humanoid","type":"Fish-Person","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks"

*/
return(
    <div className={styles.container}>
        <img className={styles.image} style={obj.img} src={character.image} alt={character.name} />
      <div className={styles.info}>
      <span className={styles.name} style={obj.name}>{name}</span>
      <h3>Species: <span style={obj.specie}>{species}</span></h3>
      <h3>Gender:<span style={obj.gender}>{gender}</span></h3>
      <h3>Origin:<span> {originName} </span></h3>
      <h3>Location: <span> {locationName} </span></h3>
      <h3>Status:  <span> {status} </span></h3>
      </div>
      <div className={styles.btnContent}>
        <button className={styles.btnBack} onClick={handleBack}>X</button>
      </div>


        {/* <button onClick={handleBackHome}>Back Home</button> */}
    </div>
    )
}


export default Detail