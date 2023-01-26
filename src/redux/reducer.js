const initialState = {
    number:"",
    number2:'',
    result:'',
}

export const reducer = (state = initialState,action)=>{
    switch(action.type){
        case "ONCHANGE1":
            return{...state,number: action.payload}
        case "ONCHANGE2":
            return {...state, number2: action.payload}
        case "PLUS":
            return {...state, result: state.number!=='' && state.number2 !==''? state.number+state.number2 : alert('Empty space,please enter number'),number:'',number2:''}      
        case "MINUS":
            return {...state, result: state.number!=='' && state.number2 !=='' ? state.number-state.number2 : alert('Empty space,please enter number'),number:'',number2:''}      
        case "DEVIDE":
            return {...state, result: state.number!=='' && state.number2 !==''? state.number/state.number2 : alert('Empty space,please enter number'),number:'',number2:''}      
        case "MULTIPLY":
            return {...state, result: state.number!=='' && state.number2!=='' ? state.number*state.number2 : alert('Empty space,please enter number'),number:'',number2:''}      
        default: 
        return state
    }
}