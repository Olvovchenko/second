
import logo from './logo.svg';
import './App.css';
import { useState,useEffect,useMemo,useCallback } from 'react';
import Numbers from './child'

function App() {

const[name, setName]=useState('возвратиться');
const[category,setCategory]=useState([]);
const[count, setCount]=useState(0);
const retro =useMemo(()=>{
   setCategory(name==='возвратиться'?['любовь', 'жизнь', 'деньги','работа','здоровье']:['возвратиться']
   )},[name]
   );
const counter=useMemo(()=>{setCount(count+1)},[name]);
const ran=useMemo(()=>(Math.floor(Math.random()*10)),[name]);
useEffect(()=>{
   console.log('on',name);
   return ()=>{console.log('off', name)}
},[name])

return (
<body>
  <div className="App">
    <header className="App-header">
  <h1>
     Гадание по книгам. Задай вопрос и нажми подходящую кнопку...
  </h1>
    </header>
    <div className="pct">
      <div className={name!=='возвратиться'?"Ans":"Noans"}>
        <Numbers name={name} rand={ran} county={count}/>
      </div>
      <div>
       <ul>
                
      {category.map((cat,index)=>{
         return(<li key={index}><img src="https://st.depositphotos.com/3369547/53198/v/600/depositphotos_531983490-stock-illustration-open-book-pages.jpg" className={(cat==='возвратиться')?"alfa"+1:"alfa"+index}/>
            <button className={(cat==='возвратиться')?"alfa"+1:"alfa"+index} onClick={()=>setName(cat)}>{cat}</button></li>)
      })} 
          
      
       </ul>
      </div>
    </div>
  </div>
</body>
)
  
}
export default App;
