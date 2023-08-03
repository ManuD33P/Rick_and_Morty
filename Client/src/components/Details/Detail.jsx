//hooks imports
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
//herramientas
import { flushSync } from "react-dom";
//styles
import styles from "./Detail.module.css";
import { getCharacterById } from "../services/useGetCharacters";
const Detail = () => {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  useEffect( () => {

   (async ()=>{
    try {
      const data = await getCharacterById(id)
      if(data.name) setCharacter(data)
    } catch (error) {

    }
   })()

  }, [id]);

  const isLogin = useSelector((state) => state.login);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin !== true) {
      navigate("/");
    }
  }, [isLogin,navigate]);


  const routeBack = useSelector((state) => state.ultimateRoute);
  const handleBack = () => {
    if (!document.startViewTransition) {
      navigate(routeBack);
      return;
    }
    document.startViewTransition(() => {
      flushSync(() => {
        navigate(routeBack);
      });
    });
  };

  if (!character) {
    return <div>Loading...</div>; 
  }

  const name = character.name || "";
  const species = character.species || "";
  const gender = character.gender || "";
  const originName = character.origin?.name || "";
  const locationName = character.location?.name || "";
  const status = character.status || "";

  const obj = {
    img: { viewTransitionName: `img${id}` },
    name: { viewTransitionName: `name${id}` },
    gender: { viewTransitionName: `gender${id}` },
    specie: { viewTransitionName: `specie${id}` },
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        style={obj.img}
        src={character.image}
        alt={character.name}
      />
      <div className={styles.info}>
        <span className={styles.name} style={obj.name}>
          {name}
        </span>
        <h3>
          Species: <span style={obj.specie}>{species}</span>
        </h3>
        <h3>
          Gender:<span style={obj.gender}>{gender}</span>
        </h3>
        <h3>
          Origin:<span> {originName} </span>
        </h3>
        <h3>
          Location: <span> {locationName} </span>
        </h3>
        <h3>
          Status: <span> {status} </span>
        </h3>
      </div>
      <div className={styles.btnContent}>
        <button className={styles.btnBack} onClick={handleBack}>
          X
        </button>
      </div>
    </div>
  );
};

export default Detail;
