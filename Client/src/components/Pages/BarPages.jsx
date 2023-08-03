// hook import


//style
import styled from "./BarPages.module.css";
//componets
import Cards from "../Cards/Cards";
//herramientas

// imagenes
import iconLeft from "../../utils/icons/lefticon.svg";
import iconRight from "../../utils/icons/rigthicon.svg";
import useGetCharacters from "../services/useGetCharacters"




const BarPages = () => {
  //
   const {onClose,characters,handleChangePage} = useGetCharacters();
   
  return (
    <section className={styled.container}>
      <img
        name="back"
        className={[styled.pages, styled.back].join(" ")}
        onClick={handleChangePage}
        src={iconLeft}
        alt="esta es una imagen back page"
      />
      <img
        name="next"
        className={[styled.pages, styled.next].join(" ")}
        onClick={handleChangePage}
        src={iconRight}
        alt="esta es una imagen next Page"
      />

      <div className={styled.carts}>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </section>
  );
};

export default BarPages;
