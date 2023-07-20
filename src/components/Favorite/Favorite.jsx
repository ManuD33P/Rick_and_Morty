import {useSelector } from "react-redux"
import Cards from "../Cards/Cards"
import Title from "../Title/Title"
import styled from "./Favorite.module.css"
const Favorite = () => {

    const  myFavorite = useSelector(state => state.myFavorite)
     
        const isEmpty = () => {
            return  <>
             <div className={styled.container}>
                 <Title/>
            </div>
            {myFavorite.length !== 0 ? 
             <Cards characters={myFavorite} /> : <div className={styled.text}> The list of my favorites is empty ... </div>
            }
            </>
        }
     return  <>
     
     {/* <div className={styled.container}>
     <Title/>
     </div>
     <Cards characters={myFavorite} /> */}

       {isEmpty()}
     </>
}

export default Favorite