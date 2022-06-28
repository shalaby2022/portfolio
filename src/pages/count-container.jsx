import Decrement from "../components/decrement";
import Increment from "../components/increment";
import { useState } from 'react';

function Container() {

    const[number,setNumber] = useState(0)

    function increment(){
        setNumber(number+1)
    }

    function decrement(){
        if(number >= 1) {
            setNumber(number-1)
        }
    }
    
    return <>
        <h1 className="text-center text-secondary fw-bold">{number}</h1>
        <div className="w-50 mx-auto mt-5 d-flex justify-content-between">
            <Decrement decrement={decrement}  count="number"/>
            <Increment increment={increment} count="number"/>
        </div>
    </>
}

export default Container