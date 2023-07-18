import styles from "./card.module.css"
import { useNavigate,useLocation } from "react-router-dom";
import { flushSync } from "react-dom";

export default function Card(props) {
    const {id,name,species,gender,image,onClose} = props
    const backhome = useLocation()
    const navigate = useNavigate();
    const handleBackHome = () => {
        if(!document.startViewTransition){
            localStorage.setItem("backRoute",backhome.pathname)
            navigate(`/detail/${id}`)
            return;
        }
        document.startViewTransition( ()=>{
            console.log(backhome.pathname)
            localStorage.setItem("backRoute",backhome.pathname)

            flushSync(()=> navigate(`/detail/${id}`))
        }
        );
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
           <button className={styles.btnClose} onClick={()=> onClose(id)}></button>
           <img onClick={handleBackHome} className={styles.img} style={obj.img} src={image} alt={`imagen de ${name}`} />
           </header>
           {/* <Link to= {`/detail/${id}`}> */}
           <h2  style={obj.name} className={styles.name}>{name}</h2>
           {/* </Link> */}
           <aside className={styles.info}>
          <h4  className={styles.text}>Especie:</h4> <span style={obj.specie} className={styles.span}>{species}</span>
          <h4   className={styles.text}>Genero:</h4> <span style={obj.gender} className={styles.span}>{gender}</span>
          </aside>
       </div>
       );
 }
//  className={styles.header}
//  className={styles.nav}
//  className={styles.info}