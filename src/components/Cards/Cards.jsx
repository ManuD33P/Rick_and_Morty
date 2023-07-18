import Card from '../Card/Card';
import style from './cards.module.css'


export default function Cards({characters,onClose}) {
   return(
         <section className={style.conteiner}>      
      {  characters.map(element=>{
           
           return(      
           <Card
            key={element.id}
            {...element}
            onClose={onClose}
            ></Card>
            )
         })
      }
         </section>
      )
}