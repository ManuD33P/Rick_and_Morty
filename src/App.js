
//STYLES
import './App.css';

//COMPONENTS IMPORTS
import Cards from './components/Cards/Cards';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import Login from "./components/Login/Login";
import BarPages from './components/Pages/BarPages';
import Detail from './components/Details/Detail';
import FloatingNav from './components/Nav/FloatingNav';
import Favorite from './components/Favorite/Favorite';
import About from './components/About/About';
//HOOKS
import { useState} from 'react';

//ROUTES
import { Routes,Route,useLocation } from 'react-router-dom';

//AXIOS IMPORT
import axios from 'axios';
import Title from './components/Title/Title';






function App() {
   // hooks
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation();
   //obtengo el estado global.
 
  // funcion de busquedad

   function onSearch(id) {
      if(Number(id)>= 1 && Number(id) <= 826 ){
         const searchRepeat = characters && characters.some(element => element.id===Number(id))
         return !searchRepeat?
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
           if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
           } else {
              alert('There are no characters with this ID!');
            }
         }): alert('Can\'t search for Repeating characters.')
      }
      else alert('There are no characters with that id.');
   } 
   

   //funcion para cerrar card.
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
              (<>
              <SearchBar 
              onSearch={onSearch}
              />
              </>)
         }
         
         {  
         pathname !== '/' ?
            <FloatingNav/> : null
         }
         <Routes>
           <Route
               path='/'
               element={<>
               <Login/>
               </>
               }
           />
          <Route
               path='/home'
               element={
                  <Cards characters={characters} onClose={onClose} 
               />}
            />
           <Route
               path='/detail/:id'
               element={
               <>
               <Title/>
               <Detail />
               </>
               }
            />
          <Route
               path='/allCharacters/:page'
               element = {<>
               <Title/>
               <BarPages/>
               </>
               }
           />

           <Route
               path='/myFavorite'
            element={<Favorite/>}
           />

           <Route
               path='/about'
               element={<About/>}
            />

         </Routes>


      </div>
   );
}

export default App;
