
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
import Title from './components/Title/Title';
import { getCharacterById } from './components/services/useGetCharacters';





function App() {
   // hooks
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation();
   //obtengo el estado global.
 
  // funcion de busquedad

  async function onSearch(id) {
         const searchRepeat = characters && characters.some(element => element.id===Number(id))
        let data
        if(!searchRepeat){
         try {
            data = await getCharacterById(id)
            if(data.name) setCharacters((oldChars) => [...oldChars, data]) 
         } catch (error) {
            return
         }
         } else {
            alert('character cannot be repeated')
         }
   
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
               path='/allCharacters'
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
