// hook import
import { useState,useEffect,StrictMode } from "react";
import { useNavigate, useParams } from "react-router-dom";

//style
import styled from "./BarPages.module.css";
//componets
import Cards from "../Cards/Cards";
//herramientas
import axios from "axios";

// imagenes
import  iconLeft  from "../../utils/icons/lefticon.svg"
import iconRight from "../../utils/icons/rigthicon.svg"



const BarPages = (props) => {
//  
 const [characters,setCharacters] = useState([]);

 const {page} = useParams()

 const navigate = useNavigate();

 // capturo las pages.
 const handleChangePage = (event)=> {
    const pageValue = event.target.getAttribute('name');

    if(pageValue==='back'){
        if(Number(page)===1) return alert('No hay mas paginas hacia atras')
        else{
          const backPage = Number(page) - 1

           navigate(`/allCharacters/${backPage}`)
           localStorage.getItem('backRoute',page)
        } 
          
        
    } 

    if(pageValue==='next'){
        if(Number(page)===42) return alert('No hay mas paginas');
        else{
          const nextPage = Number(page) + 1
          navigate(`/allCharacters/${nextPage}`)
          localStorage.getItem('backRoute',nextPage)
        } 
          
    }
};

 //cada vez que se actualiza page, hace una nueva solicitud para obtener characters.
 useEffect(()=> {

    page &&
    axios(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(({data}) => {
      const {results} = data;
      setCharacters(results);
    })
    .catch((error) => alert(error))
     
 },[page]);
 

  // funcion onClose para las cards.

 function onClose(id) {
    setCharacters(
      characters.filter((character) => {
        return character.id !== Number(id)
      })
    )
   }
 
return (

    <section className={styled.container}>
        <img name="back" className= {[styled.pages, styled.back].join(" ")} onClick={handleChangePage} src={iconLeft}/>
        <img name="next" className= {[styled.pages, styled.next].join(" ")} onClick={handleChangePage} src={iconRight}/>

        <div className={styled.carts}>
        <Cards characters={characters} onClose={onClose}/>
        </div>
    </section>

)
}

export default BarPages

