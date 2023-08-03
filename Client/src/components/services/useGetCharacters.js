
import { useState, useEffect } from "react";
import axios from "axios";
function useGetCharacters() {
    const [characters, setCharacters] = useState([]);
    const [pageInfo, setPageInfo] = useState(1)    

    const getCharacters = async (page) => {
      try {
        const { data } = await axios(`http://localhost:3001/rickandmorty/character/page/${page}`);
        setCharacters(data);
      } catch (error) {
        alert(error);
      }
    };
    
    useEffect(()=>{
     getCharacters(1)
    },[])    
  
  
    // capturo las pages.
    const handleChangePage = (event) => {
      const pageValue = event.target.getAttribute("name");
      if (pageValue === "back") {
        if (pageInfo===1) return alert("No more pages back");
        else {
            getCharacters(pageInfo -1);
            setPageInfo(pageInfo-1);
        }
      }
  
      if (pageValue === "next") {
        if (pageInfo===42) return alert("There are no more pages");
        else {
          getCharacters(pageInfo +1);
          setPageInfo(pageInfo+1)
        }
      }
    };
  
    function onClose(id) {
      setCharacters(
        characters.filter((character) => {
          return character.id !== Number(id);
        })
      );
    }
  
  
    return {
      onClose,
      characters,
      handleChangePage,
    }
  }
  

  export async function getCharacterById(id){
try {
  const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);

  return data.name? data : null;
} catch (error) {
  if(error.response)
  alert(error.response.data)
  else
  alert(error.message);
}
           
  };
  

  export default useGetCharacters