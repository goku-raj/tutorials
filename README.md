##useState hooks

function which render some action performed on relatively two element 
in react.__
js, we can use the useState hook to manage state and useEffect for side effects in functional components of
ReactJS.<|im_sep|>__
Example:__
import React,{useState} from'react';__

const [name , setName] = useState(initial state);__

name-> value which is to be change;__
initialState -> initial Value that will set when component load first time or page refresh__
setName -> is a useState Function__
that takes an initialValue as argument and returns array containing current State Value at index0 & function to __
used to update name variable with new values passed as argument.__

const setName=()=>{__
    return //some conditional & logic code__
}