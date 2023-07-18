import style from './search.module.css'
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../Title/Title';
export default function SearchBar({onSearch}) {
      const [id,setId] = useState(null)
      const handleChangeId = (event) => event.target.value && setId(event.target.value)
      const navigate = useNavigate()
      const handleNavigate = () => navigate('/allCharacters/1');
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
          placeholder='Busquedad por id'
         
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
         Explorar</button>
         </div>
      </form>
         </>



   );
}
