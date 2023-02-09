
import logo from './logo.svg';
import './App.css';
import { useState,useEffect,useMemo,useCallback } from 'react';
import Numbers from './child'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

function App() {

const[name, setName]=useState('возвратиться');
const[category,setCategory]=useState([]);
const[count, setCount]=useState(0);
const retro =useMemo(()=>{
   setCategory(name==='возвратиться'
   ?['любовь', 'жизнь', 'деньги','работа','здоровье']
   :['возвратиться']
   )},[name]
   );
const counter=useMemo(()=>{setCount(count+1)},[name]);
const ran=useMemo(()=>(Math.floor(Math.random()*10)),[name]);
useEffect(()=>{console.log(count)},[name])

return (
<body>
  <div className="App">
    <header className="App-header">
  <h1>
     Гадание по книгам. Задай вопрос и нажми подходящую кнопку...
  </h1>
    </header>
    
        <div className="pct">
        
         
        <Numbers name={name} rand={ran} county={count}/>
        
    
        

      

      
      <div>
       <ul>
           <TransitionGroup>    
      {category.map((cat,index)=>{
        return(
        <CSSTransition
        key={index}
        timeout={1800}
        classNames="item">

         <li>
          <img 
          src="https://st.depositphotos.com/3369547/53198/v/600/depositphotos_531983490-stock-illustration-open-book-pages.jpg" 
          className={(cat==='возвратиться')?"alfa"+1:"alfa"+index}/>
            <button 
            className={(cat==='возвратиться')?"alfa"+1:"alfa"+index} 
            onClick={()=>setName(cat)}>{cat}</button></li>
            </CSSTransition>
        )
      })} 
          </TransitionGroup>
      
       </ul>
      </div>
    </div>
  </div>
</body>
)
  
}
export default App;
