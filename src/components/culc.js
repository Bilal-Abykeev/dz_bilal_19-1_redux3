import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
function Culc() {
    const dispatch = useDispatch()
    let number = useSelector(state => state.number)

    let number2 = useSelector(state => state.number2)
    
    const result = useSelector(state=>state.result)
    const change1 =(e)=>{
        let number = Number(e.target.value)
        dispatch({
            type: "ONCHANGE1",
            payload: number
        })
        
    }
    const change2 =(e)=>{
        let number = Number(e.target.value)
        dispatch({
            type: "ONCHANGE2",
            payload: number
        })
    }
    const  plus = ()=>{
        dispatch({
            type: "PLUS",
        })
    }
    const minus =()=>{
        dispatch({
            type: "MINUS",
           
        })
    }
    const devide =()=>{
        dispatch({
type: "DEVIDE"            
        })
    }
    const multiply =()=>{
        dispatch({
            type:"MULTIPLY"
        })
    }

    
  return (
    <div>
    
        <input type="number" onChange={change1} value={number} />
        <input type="number" onChange={change2} value={number2} />
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={devide}>/</button>
        <button onClick={multiply}>*</button>
            <h1>{result}</h1>
    </div>
  )
}

export default Culc