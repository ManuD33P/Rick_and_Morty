import style from './search.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../Title/Title';
export default function SearchBar({onSearch}) {
      //hooks
      const [id,setId] = useState(null)
      const navigate = useNavigate()

      //obtoner la id
      const handleChangeId = (event) => event.target.value && setId(event.target.value)
       // boton para ir al explorer
      const handleNavigate = () => navigate('/allCharacters/1');
      
        // funcion para obtener cuando se mandar el formulario.
      const handleSubmit = (event) => {
             event.preventDefault();
              onSearch(id);
             event.target.reset()
      } 
   return (
        
        <>
        <Title/>

      <form onSubmit={handleSubmit} className={style.container}>
         
         <input 
          type='text'
          placeholder='Search by id'
         
          className={style.search}
          onChange={handleChangeId}
          />
         <button type='submit'
         className={style.btnAdd} value="Add" > Add </button>
         <div 
         className={style.containerButton}
         >
         <button 
         onClick = {handleNavigate}
         className={style.btnAdd}>
         Explore</button>
         </div>
      </form>
         </>



   );
}
