
//STYLES
import './App.css';

//COMPONENTS IMPORTS
import Cards from './components/Cards/Cards';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import Login from "./components/Login/Login";
import BarPages from './components/Pages/BarPages';
import Detail from './components/Details/Detail'
//HOOKS
import { useState} from 'react';

//ROUTES
import { Routes,Route,useLocation } from 'react-router-dom';

//AXIOS IMPORT
import axios from 'axios';
import Title from './components/Title/Title';






function App() {
 
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation();
   function onSearch(id) {
      if(Number(id)>= 1 && Number(id) <= 826 ){
         const searchRepeat = characters && characters.some(element => element.id===Number(id))
         return !searchRepeat?
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
           if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
           } else {
              alert('¡No hay personajes con este ID!');
            }
         }): alert('No se pueden buscar personajes Repetidos')
      }
      else alert('No hay personajes con ese id.');
   } 
   
   function onClose(id) {
    setCharacters(
      characters.filter((character) => {
        return character.id !== Number(id)
      })
    )
   }
   
   return (
      <div className='App'>
            {
              pathname === '/home' &&
            <SearchBar 
            onSearch={onSearch}
             />
            }
         <Routes>
           <Route
               path='/'
               element={<Login/>}
           />
          <Route
               path='/home'
               element={
                  <Cards characters={characters} onClose={onClose} 
               />}
            />
           <Route
               path='/detail/:id'
               element={<Detail />}
            />
          <Route
               path='/allCharacters/:page'
               element = {<>
               <Title/>
               <BarPages/>
               </>
               }
           />
         </Routes>
      </div>
   );
}

export default App;
