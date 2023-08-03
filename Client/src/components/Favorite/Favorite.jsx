import { useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import Title from "../Title/Title";
import styled from "./Favorite.module.css";
import Filterbar from "../Filter/Filterbar";
const Favorite = () => {
  const myFavorite = useSelector((state) => state.myFavorite);
  const filter = useSelector((state) => state.filterCharacters);
  
  const setCharacters = () => {
    if(filter.length) return filter
    else return myFavorite
  }

  const isEmpty = () => {
    return (
      <>
        {myFavorite.length !== 0 ? (
          <Cards characters={setCharacters()} />
        ) : (
          <div className={styled.text}>
            {" "}
            
            The list of my favorites is empty ...{" "}
          </div>
        )}
      </>
    );
  };
  return (
    <>
      <div className={styled.container}>
        <Title />
      </div>
      <Filterbar />
      {isEmpty()}
    </>
  );
};

export default Favorite;
