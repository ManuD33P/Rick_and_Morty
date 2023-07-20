import {useSelector } from "react-redux"
import Cards from "../Cards/Cards"
import Title from "../Title/Title"
const Favorite = () => {

    const  myFavorite = useSelector(state => state.myFavorite)

     return  <>
     <Title/>
     <Cards characters={myFavorite} />
     </>
}

export default Favorite