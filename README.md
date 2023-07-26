##useState hooks

function which render some action performed on relatively two element 
in react.
js, we can use the useState hook to manage state and useEffect for side effects in functional components of
ReactJS.<|im_sep|>
Example:
import React,{useState} from'react';

const [name , setName] = useState(initial state);

name-> value which is to be change;
initialState -> initial Value that will set when component load first time or page refresh
setName -> is a useState Function
that takes an initialValue as argument and returns array containing current State Value at index0 & function to 
used to update name variable with new values passed as argument.

const setName=()=>{
    return //some conditional & logic code
}