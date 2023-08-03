import { useDispatch } from "react-redux";
import { useState } from "react";
import styled from "./Filterbar.module.css";
import { filterCharacters } from "../../redux/actions";

const Filterbar = () => {

    
    const dispatch = useDispatch();

    const handleSelectChange = (event)=>{
      const {value} = event.target
      dispatch((dispatch)=>{dispatch(filterCharacters(value))})
    }
  return (
    <>

      <div className={styled.container}>

        <select onChange={handleSelectChange} className={styled.containerOrder}>
          <option value="" />
          <option value="A">Upward</option>
          <option value="D">Falling</option>
        </select>

        <select onChange={handleSelectChange} className={styled.containerGender}>
          <option value=""/>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
          <option value="allCharacters">All Characters</option>
        </select>

      </div>
    </>
  );
};

export default Filterbar;
