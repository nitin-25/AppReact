import { useState } from "react";

function App() {
   // let Counter = 0;
    const [Counter, setCounter] = useState(0);
    const AddCounter = () =>{
        if(Counter<20)
            setCounter(Counter+1);
    }
    const RemoveCounter = () => {
        if (Counter>0){
        setCounter(Counter-1);
        }
    }

    return (
        <>
           <h2> Counter</h2>
            <h1>{Counter}</h1>
            
            <button onClick={AddCounter}>AddCount{Counter}</button><br />

            <button onClick={RemoveCounter}>removerCount{Counter}</button>
        </>
    );
}


  
export default App;